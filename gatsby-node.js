const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const careersTemplate = path.resolve("src/templates/careers-item/index.tsx");

  const { data } = await graphql(`
    {
      careers: allFile(filter: { sourceInstanceName: { eq: "careers" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  console.log({ data });

  data.careers.edges.forEach((entry) => {
    const { name } = entry.node;
    const page = {
      path: `/careers/${name}`,
      component: careersTemplate,
      context: { slug: name },
    };
    createPage(page);
  });
};
