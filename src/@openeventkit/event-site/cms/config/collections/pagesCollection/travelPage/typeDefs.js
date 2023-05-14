
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
  type OverlappingContentImageSection {
    title: String
    image: ImageWithAlt
    content: String
  }
  type TravelPageJson implements Node {
    hero: PageHeader
    thingsToDo: OverlappingContentImageSection
  }
`;
