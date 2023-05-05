import {
  booleanField,
  stringField,
  textField,
  fileField,
  markdownField,
  imageWithAltField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  MARKETING_PAGE_FILE_PATH
} from "@openeventkit/event-site/src/utils/filePath";

const markdownFieldButtons = [
  "bold",
  "italic",
  "link",
  "heading-one",
  "heading-two",
  "heading-three",
  "heading-four",
  "heading-five",
  "heading-six"
];

const marketingPage = {
  label: "Marketing Page",
  name: "marketing-page",
  file: MARKETING_PAGE_FILE_PATH,
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
          label: "Lead Title",
          name: "leadTitle",
          required: false
        }),
        textField({
          label: "Lead",
          name: "lead",
          required: false
        }),
        objectField({
          label: "Buttons",
          name: "buttons",
          fields: [
            objectField({
              label: "Register Button",
              name: "registerButton",
              fields: [
                stringField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display",
                  required: false
                })
              ]
            }),
            objectField({
              label: "Login Button",
              name: "loginButton",
              fields: [
                stringField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display",
                  required: false
                })
              ]
            })
          ]
        }),
        fileField({
          label: "Background Video",
          name: "backgroundVideo"
        })
      ]
    }),
    objectField({
      label: "Featuring",
      name: "featuring",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Image",
          name: "image"
        }),
        markdownField({
          label: "Content",
          name: "content",
          buttons: markdownFieldButtons,
          editor_components: []
        })
      ]
    }),
    objectField({
      label: "Attend",
      name: "attend",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        listField({
          label: "Benefits",
          name: "benefits",
          fields: [
            stringField({
              label: "Concept",
              name: "concept"
            }),
            stringField({
              label: "Description",
              name: "description"
            }),
            imageWithAltField({
              label: "Background Image",
              name: "backgroundImage"
            }),
            imageWithAltField({
              label: "Foreground Image",
              name: "foregroundImage"
            })
          ]
        })
      ]
    }),
    objectField({
      label: "Celebrate",
      name: "celebrate",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Image",
          name: "image"
        }),
        markdownField({
          label: "Content",
          name: "content",
          buttons: markdownFieldButtons,
          editor_components: []
        })
      ]
    })
  ]
};

export default marketingPage;
