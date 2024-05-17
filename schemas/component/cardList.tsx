import { defineField } from "sanity";

export default defineField({
  name: "cardList",
  type: "object",
  title: "Card List",
  preview: {
    prepare() {
      return {
        title: "Card",
        subtitle: "Card List Component",
      };
    },
  },
  fields: [
    {
      name: "content",
      title: "Card List",
      type: "array",
      of: [
        {
          name: "faq",
          type: "reference",
          to: [{ type: "card" }],
        },
      ],
    },
  ],
});
