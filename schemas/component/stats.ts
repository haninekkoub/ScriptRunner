import { defineField } from "sanity";

export default defineField({
  name: "statsComponent",
  type: "object",
  title: "Stats Component",
  preview: {
    prepare() {
      return {
        title: "Stats",
        subtitle: "Stats Component",
      };
    },
  },
  fields: [
    {
      name: "pils",
      title: "Pils List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "orangePils",
              type: "string",
              title: "Left Part",
            },
            {
              name: "whitePils",
              type: "string",
              title: "Right Part",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: "highlights",
      title: "Highlights List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "highlight",
              type: "string",
              title: "Highlight",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
});
