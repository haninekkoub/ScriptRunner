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
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Card Image",
            },
            {
              name: "title",
              type: "string",
              title: "Card Title",
            },
            {
              name: "info",
              type: "string",
              title: "Card Info",
            },
          ],
        },
      ],
    },
  ],
});
