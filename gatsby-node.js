const crypto = require("crypto");
const path = require("path");
const changeCase = require("change-case");

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === `ProgramsJson`) {
    const endOrder = node.sections.length;

    node.sections
      .sort((a, b) => a.order - b.order)
      .forEach((section, idx) => {
        section.order = idx + 1;
        section.programId = node.id;
        section.programName = changeCase.kebabCase(node.name);
        section.endOrder = endOrder;
        
        const nodeMetadata = {
          id: `${node.id}-${idx}`,
          parent: `${node.id}`,
          children: [],
          internal: {
            type: `Section`,
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(section))
              .digest(`hex`),
            mediaType: `text/markdown`,
          }
        };

        const sectionNodeData = Object.assign(section, nodeMetadata);
        createNode(sectionNodeData);
    });
  }

  if (node.internal.type === "Section") {
    const { programName, order } = node;
    const slug = `programs/${programName}/part-${order}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allSection {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
).then(result => {
    result.data.allSection.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/section.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
