import { defineField } from "sanity";

export default defineField({
  name: "benefits",
  type: "object",
  title: "Benefits Component",
  preview: {
    select: {
      title: "Benefits",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Benefits Component",
      };
    },
  },

  fields: [
    {
      name: "benefitscards",
      title: "Benefits Card",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "image",
              title: "Icon",
            },
            {
              name: "title",
              type: "string",
              title: "Card Title",
            },
            {
              name: "description",
              type: "string",
              title: "Card Description",
            },
            {
              name: "image",
              type: "image",
              title: "image",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
});
