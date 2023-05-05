import {
  stringField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  FAQS_PAGE_FILE_PATH
} from "utils/filePath";

const faqsPage = {
  label: "FAQS Page",
  name: "faqs-page",
  file: FAQS_PAGE_FILE_PATH,
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
        })
      ]
    }),
    listField({
      label: "Categories",
      name: "categories",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        stringField({
          label: "Description",
          name: "description",
          required: false
        }),
        listField({
          label: "Questions & Answers",
          name: "questionsAndAnswers",
          fields: [
            stringField({
              label: "Question",
              name: "question"
            }),
            stringField({
              label: "Answer",
              name: "answer"
            })
          ]
        })
      ]
    })
  ]
};

export default faqsPage;
