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
      name: "ctaTitle",
      type: "string",
      title: "Cta Title",
    },
    {
      name: "button",
      type: "string",
      title: "Button Text",
    },
    {
      name: "cta",
      type: "boolean",
      title: "Cta section",
    },
    {
      name: "privacyLink",
      type: "string",
      title: "Privacy Policy Link",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },

    {
      name: "ctaText",
      type: "string",
      title: "Cta Text",
    },
    {
      name: "ctaLink",
      type: "string",
      title: "Cta Link",
    },
  ],
});
