import { defineField } from "sanity";

export default defineField({
  name: "card",
  type: "object",
  title: "Card",
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Card",
      };
    },
  },
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
});
