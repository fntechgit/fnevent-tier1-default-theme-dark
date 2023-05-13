import {
  textField,
  markdownField,
  imageWithAltField,
  objectField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TERMS_PAGE_FILE_PATH
} from "utils/filePath";

const markdownFieldButtons = [
  "bold",
  "italic",
  "link"
];

const termsPage = {
  label: "Terms Page",
  name: "terms-page",
  file: TERMS_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        markdownField({
          label: "Lead",
          name: "lead",
          required: false,
          buttons: markdownFieldButtons,
          editor_components: []
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
  ]
};

export default termsPage;
