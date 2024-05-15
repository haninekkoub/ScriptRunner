import { defineField } from "sanity";

export default defineField({
  name: "faq",
  type: "document",
  title: "Faq",
  preview: {
    select: {
      title: "question",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Faq",
      };
    },
  },
  fields: [
    {
      name: "question",
      type: "string",
      title: "Faq Question",
    },
    {
      name: "info",
      type: "string",
      title: "Faq Info",
    },
  ],
});
