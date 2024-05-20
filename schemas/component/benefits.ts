import { defineField } from "sanity";

export default defineField({
  name: "benefits",
  type: "object",
  title: "Benefits Component",
  preview: {
    select: {
      title: "benefits",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "benefits Component",
      };
    },
  },

  fields: [
    {
      name: "title",
      type: "text",
      title: "Cta Title",
    },
  ],
});
