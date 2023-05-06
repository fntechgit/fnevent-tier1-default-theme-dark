
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = require("./src/@openeventkit/event-site/cms/config/collections/typeDefs");
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({
  actions,
  loaders,
  getConfig
}) => {
  /**
   * Forces transpilation of @openeventkit/event-site
   * @see https://github.com/gatsbyjs/gatsby/issues/14053#issuecomment-493401486
   */
  const webpackConfig = getConfig();
  const jsTest = /\.(js|mjs|jsx|ts|tsx)$/;
  const jsRule = webpackConfig.module.rules.find(
    (rule) => String(rule.test) === String(jsTest)
  );
  const jsRuleInclude = jsRule.include;
  jsRule.include = (modulePath) => {
    if (/node_modules\/@openeventkit\/event-site/.test(modulePath)) return true;
    return jsRuleInclude(modulePath);
  }
  webpackConfig.module.rules = [
    ...webpackConfig.module.rules.filter(
      (rule) => String(rule.test) !== String(jsTest)
    ),
    jsRule
  ];
  actions.replaceWebpackConfig(webpackConfig);
};
