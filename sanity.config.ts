import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { singletonTools } from "sanity-plugin-singleton-tools";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "scriptrunner",

  projectId: "imgq8z3v",
  dataset: "production",

  basePath: "/studio",
  plugins: [structureTool(), visionTool(), muxInput(), singletonTools()],
  schema: { types: schemaTypes },
});
