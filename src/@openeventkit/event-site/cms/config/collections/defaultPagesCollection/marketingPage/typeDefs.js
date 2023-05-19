
module.exports = `
  type ImageWithAlt {
    src: File @fileByRelativePath
    alt: String
  }
  type Button {
    text: String
    display: Boolean
  }
  type MarketingPageJoinButtons {
    registerButton: Button
    loginButtom: Button
  }
  type BackgroundVideoVersions {
    mobile: File @fileByRelativePath
    desktop: File @fileByRelativePath
  }
  type MarketingPageHero {
    title: String
    leadTitle: String
    lead: String
    buttons: MarketingPageJoinButtons
    backgroundVideo: BackgroundVideoVersions
  }
  type ImageContentSection {
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
  type MarkertingPageCallToAction {
    display: Boolean
    title: String
    backgroundImage: ImageWithAlt
    buttons: MarketingPageJoinButtons
  }
  type MarketingPageJson implements Node {
    hero: MarketingPageHero
    featuring: ImageContentSection
    attend: MarkertingPageCarouselSection
    awards: ImageContentSection
    callToAction: MarkertingPageCallToAction
  }
`;
