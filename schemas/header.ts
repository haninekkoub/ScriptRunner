import { defineField } from "sanity";

export default defineField({
  name: "header",
  type: "document",
  title: "header Component",
  options: {
    singleton: true,
  },
  preview: {
    select: {
      title: "header",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "header Component",
      };
    },
  },

  fields: [
    {
      name: "button",
      type: "string",
      title: "Button Text",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
  ],
});
