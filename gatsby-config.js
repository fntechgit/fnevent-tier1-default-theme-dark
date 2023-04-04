/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Roblox fnVirtual theme",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "virtualevent",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
