import { defineField } from "sanity";

export default defineField({
  name: "benefits",
  type: "object",
  title: "Benefits Component",
  preview: {
    prepare() {
      return {
        title: "Benefits Card",
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
              name: "topImage",
              type: "image",
              title: "Fixed Top image",
            },
            {
              name: "image",
              type: "array",
              validation: (Rule) => Rule.max(1),
              title: "Image",
              of: [
                {
                  name: "largeImage",
                  type: "image",
                  title: "Large image",
                },
                {
                  name: "video",
                  type: "mux.video",
                  title: "video",
                },
                {
                  name: "smallImage",
                  type: "image",
                  title: "Small image",
                },
              ],
            },
            {
              name: "bottomImage",
              type: "image",
              title: "Fixed Bottom image",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
});
