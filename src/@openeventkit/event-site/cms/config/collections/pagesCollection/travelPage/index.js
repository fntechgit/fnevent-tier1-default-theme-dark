import {
  stringField,
  textField,
  markdownField,
  imageWithAltField,
  objectField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TRAVEL_PAGE_FILE_PATH
} from "utils/filePath";

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
        textField({
          label: "Lead",
          name: "lead",
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
    objectField({
      label: "Things to Do",
      name: "thingsToDo",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Image",
          name: "image"
        }),
        textField({
          label: "Content",
          name: "content"
        })
      ]
    })
  ]
};

export default travelPage;
