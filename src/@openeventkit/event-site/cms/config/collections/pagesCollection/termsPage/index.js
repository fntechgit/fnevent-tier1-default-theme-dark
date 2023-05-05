import {
  stringField,
  objectField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TERMS_PAGE_FILE_PATH
} from "utils/filePath";

const termsPage = {
  label: "Terms Page",
  name: "terms-page",
  file: TERMS_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        stringField({
          label: "Lead",
          name: "lead",
          required: false
        }),
      ]
    })
  ]
};

export default termsPage;
