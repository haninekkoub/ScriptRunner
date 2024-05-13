import { defineField } from "sanity";

export default defineField({
  name: "footer",
  type: "object",
  title: "Footer Component",
  preview: {
    select: {
      title: "Footer Component",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "footer component",
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
