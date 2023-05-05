
module.exports = `
  type ImageWithAlt {
    src: File @fileByRelativePath
    alt: String
  }
  type Button {
    text: String
    display: Boolean
  }
  type Buttons {
    login: Button
    register: Button
  }
  type MarketingPageHero {
    title: String
    leadTitle: String
    lead: String
    buttons: Buttons
    backgroundVideo: File @fileByRelativePath
  }
  type MarkertingPageSection {
    title: String
    image: ImageWithAlt
    content: String
  }
  type MarkertingPageCarouselItem {
    concept: String
    description: String
    backgroundImage: ImageWithAlt
    foregroundImage: ImageWithAlt
  }
  type MarkertingPageCarouselSection {
    title: String
    benefits: [MarkertingPageCarouselItem]
  }
  type MarketingPageJson implements Node {
    hero: MarketingPageHero
    featuring: MarkertingPageSection
    attend: MarkertingPageCarouselSection
    celebrate: MarkertingPageSection
  }
`;
