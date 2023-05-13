import {
  collectionDefaults
} from "@openeventkit/event-site/src/cms/config/patterns";

import faqsPage from "./faqsPage";
import termsPage from "./termsPage";
import travelPage from "./travelPage";

const pagesCollection = {
  ...collectionDefaults({
    label: "Pages",
    name: "pages"
  }),
  files: [
    faqsPage,
    termsPage,
    travelPage
  ]
};

export default pagesCollection;