
module.exports = `
  type LinkImageWithAlt {
    src: File @fileByRelativePath
    alt: String
    link: String
  }
  type FooterLink {
    text: String
    link: String
  }
  type FooterJson implements Node {
    social: [LinkImageWithAlt]
    links: [FooterLink]
    logo: LinkImageWithAlt
  }
`;