import { defineField } from "sanity";

export default defineField({
  name: "footerComponent",
  type: "object",
  title: "footer Component",
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
