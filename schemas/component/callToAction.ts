import { defineField } from "sanity";

export default defineField({
  name: "ctaComponent",
  type: "object",
  title: "Cta Component",
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Call To Action Component",
      };
    },
  },

  fields: [
    {
      name: "image",
      type: "image",
      title: "Cta Image",
    },
    {
      name: "title",
      type: "text",
      title: "Cta Title",
    },
    {
      name: "description",
      type: "text",
      title: "Cta Description",
    },
  ],
});
