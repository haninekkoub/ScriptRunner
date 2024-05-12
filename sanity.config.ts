import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "scriptrunner",

  projectId: "imgq8z3v",
  dataset: "production",

  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
