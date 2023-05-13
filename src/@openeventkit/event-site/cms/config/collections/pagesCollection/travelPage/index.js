import {
  stringField,
  markdownField,
  imageWithAltField,
  objectField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TRAVEL_PAGE_FILE_PATH
} from "utils/filePath";

const markdownFieldButtons = [
  "bold",
  "italic",
  "link"
];

const travelPage = {
  label: "Travel Page",
  name: "travel-page",
  file: TRAVEL_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        stringField({
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

export default travelPage;
