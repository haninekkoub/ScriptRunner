import { defineField } from "sanity";

export default defineField({
  name: "layout",
  type: "document",
  title: "Theme settings",
  options: {
    singleton: true,
  },

  fields: [
    {
      name: "footerContent",
      title: "Footer Content",
      type: "reference",
      to: [{ type: "footerComponent" }],
    },
  ],
});
