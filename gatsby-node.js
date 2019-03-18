const crypto = require('crypto');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
    const slug = `${node.programId}/${node.order + 1}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
