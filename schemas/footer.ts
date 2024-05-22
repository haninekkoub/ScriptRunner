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
      name: "ctaComponent",
      type: "object",
      title: "Cta Component",
      fields: [
        {
          name: "cta",
          type: "boolean",
          title: "Cta component",
        },
        {
          name: "ctaTitle",
          type: "string",
          title: "Cta Title",
        },

        {
          name: "ctabutton",
          type: "object",
          title: "Cta Button",
          fields: [
            {
              name: "content",
              type: "string",
              title: "Button Content",
            },
            {
              name: "link",
              type: "string",
              title: "Button Link",
            },
          ],
        },
      ],
    },
    {
      name: "footerText",
      type: "string",
      title: "Footer Text",
    },
    {
      name: "links",
      type: "array",
      title: "Footer Content",
      of: [
        {
          name: "leftButton",
          type: "object",
          title: "Left Button",
          fields: [
            {
              name: "content",
              type: "string",
              title: "Button Content",
            },
            {
              name: "link",
              type: "string",
              title: "Button Link",
            },
          ],
        },
      ],
    },
    {
      name: "leftLinks",
      type: "array",
      title: "Footer Content",
      of: [
        {
          name: "leftButton",
          type: "object",
          title: "Left Button",
          fields: [
            {
              name: "content",
              type: "string",
              title: "Button Content",
            },
            {
              name: "link",
              type: "string",
              title: "Button Link",
            },
          ],
        },
      ],
    },
  ],
});
