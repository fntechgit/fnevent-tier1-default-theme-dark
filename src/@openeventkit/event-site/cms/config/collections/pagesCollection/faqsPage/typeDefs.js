
module.exports = `
  type ImageWithAlt {
    src: File @fileByRelativePath
    alt: String
  }
  type PageHeader {
    title: String
    lead: String
    backgroundImage: ImageWithAlt
  }
  type FaqsPageJsonCategories {
    title: String
    description: String
  }
  type FaqsPageJson implements Node {
    hero: PageHeader
    categories: [FaqsPageJsonCategories]
  }
`;
