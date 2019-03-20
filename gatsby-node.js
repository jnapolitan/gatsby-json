const crypto = require('crypto');
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === `ProgramsJson`) {
    const endOrder = node.sections.length;

    node.sections
      .sort((a, b) => a.order - b.order)
      .forEach((section, idx) => {
        section.order = idx + 1;
        section.programId = `${node.id}`;
        section.endOrder = endOrder;
        createNode({
          id: `${node.id}-${idx}`,
          programId: section.programId,
          name: section.name,
          description: section.description,
          image: section.image,
          order: section.order,
          endOrder: section.endOrder,
          activities: section.activities,
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
        });
    });
  }

  if (node.internal.type === 'Section') {
    const { programId, order } = node;
    const slug = `programs/${programId}/${order}`;
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
