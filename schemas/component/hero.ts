import { defineField } from "sanity";

export default defineField({
  name: "heroComponent",
  type: "object",
  title: "Hero Component",
  preview: {
    select: {
      title: "heroText",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Hero Component",
      };
    },
  },

  fields: [
    {
      name: "heroText",
      type: "string",
      title: "Hero Title",
      validation: (rule) => rule.max(50),
    },
    {
      name: "descritpion",
      type: "text",
      title: "Hero description",
      validation: (rule) => rule.max(200),
    },
    {
      title: "Hero video",
      name: "video",
      type: "mux.video",
    },
  ],
});
