import {
  stringField,
  linkImageField,
  linkImagesField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  FOOTER_FILE_PATH
} from "@utils/filePath";

const footer = {
  label: "Footer",
  name: "footer",
  media_folder: "",
  public_folder: "",
  file: FOOTER_FILE_PATH,
  fields: [
    linkImagesField({
      label: "Social",
      name: "social",
      imageRequired: true
    }),
    listField({
      label: "Links",
      name: "links",
      fields: [
        stringField({
          label: "Text",
          name: "text",
          required: true
        }),
        stringField({
          label: "Link",
          name: "link",
          required: true
        })
      ]
    }),
    linkImageField({
      label: "Logo",
      name: "logo"
    })
  ]
};

export default footer;