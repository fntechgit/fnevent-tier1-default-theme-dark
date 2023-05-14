
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
  type ImageContentSection {
    title: String
    image: ImageWithAlt
    content: String
  }
  type VenueImageContentSection {
    title: String
    image: ImageWithAlt
    content: String
    address: String
  }
  type TravelPageJson implements Node {
    hero: PageHeader
    venue: VenueImageContentSection
    thingsToDo: ImageContentSection
  }
`;
