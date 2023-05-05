const {
  STATIC_CONTENT_DIR_PATH
} = require("./src/utils/filePath");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /*flags: {
    DEV_SSR: true
  },*/
  siteMetadata: {
    title: "Roblox fnVirtual theme",
    siteUrl: "https://rdc23.fnvirtual.app",
  },
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/${STATIC_CONTENT_DIR_PATH}`,
        name: "content",
      }
    },
    "@openeventkit/event-site"
  ]
};
