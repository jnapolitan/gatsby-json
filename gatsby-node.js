const crypto = require('crypto');
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === `ProgramsJson`) {
    node.sections.forEach((section, idx) => {
      createNode({
        id: `${node.id}-${idx}`,
        programId: `${node.id}`,
        name: section.name,
        description: section.description,
        image: section.image,
        order: section.order,
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
    const slug = `programs/${node.programId}/${node.order + 1}`;
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
