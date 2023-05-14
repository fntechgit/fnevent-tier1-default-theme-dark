
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
  type AccommodationsHotel {
    name: String
    address: String
  }
  type AccommodationsSection {
    title: String
    content: String
    hotels: [AccommodationsHotel]
  }
  type TravelPageJson implements Node {
    hero: PageHeader
    venue: VenueImageContentSection
    thingsToDo: ImageContentSection
    accommodations: AccommodationsSection
  }
`;
