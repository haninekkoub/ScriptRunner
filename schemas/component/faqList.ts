import { defineField } from "sanity";

export default defineField({
  name: "faqList",
  type: "object",
  title: "Faq List",
  preview: {
    prepare() {
      return {
        title: "Faq",
        subtitle: "Faq List Component",
      };
    },
  },
  fields: [
    {
      name: "content",
      title: "Faq List",
      type: "array",
      of: [
        {
          name: "faq",
          type: "reference",
          to: [{ type: "faq" }],
        },
      ],
    },
  ],
});
