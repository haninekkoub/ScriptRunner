import { defineField } from "sanity";

export default defineField({
  name: "block.test",
  type: "object",
  title: "test",
  preview: {
    select: {
      title: "test",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "test component",
      };
    },
  },

  fields: [
    {
      name: "aboutDescription",
      type: "text",
      title: "test Description",
    },
  ],
});
