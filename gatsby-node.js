
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = require("./src/@openeventkit/event-site/cms/config/collections/typeDefs");
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {  
  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules"]
    }
  });
};
