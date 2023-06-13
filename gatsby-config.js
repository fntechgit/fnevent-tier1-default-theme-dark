/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /*flags: {
    DEV_SSR: true
  },*/
  siteMetadata: {
    title: "RDC 2023",
    siteUrl: "https://rdc23.fnvirtual.app",
  },
  plugins: [
    "@openeventkit/event-site"
  ]
};
