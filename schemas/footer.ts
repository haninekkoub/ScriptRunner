import { defineField } from "sanity";

export default defineField({
  name: "footer",
  type: "document",
  title: "footer Component",
  options: {
    singleton: true,
  },
  preview: {
    select: {
      title: "footer",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "footer Component",
      };
    },
  },

  fields: [
    {
      name: "ctaText",
      type: "string",
      title: "Cta Title",
    },

    {
      title: "Cta section",
      name: "cta",
      type: "boolean",
    },
  ],
});
