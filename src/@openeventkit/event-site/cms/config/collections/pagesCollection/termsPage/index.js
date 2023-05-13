import {
  textField,
  markdownField,
  imageWithAltField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TERMS_PAGE_FILE_PATH
} from "utils/filePath";

const leadMarkdownFieldButtons = [
  "bold",
  "italic",
  "link"
];

const termContentMarkdownFieldButtons = [
  "bold",
  "italic",
  "link",
  "bulleted-list"
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
          buttons: leadMarkdownFieldButtons,
          editor_components: []
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
    listField({
      label: "Terms",
      name: "terms",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        markdownField({
          label: "Content",
          name: "content",
          required: false,
          buttons: termContentMarkdownFieldButtons,
          editor_components: []
        })
      ]
    })
  ]
};

export default termsPage;
