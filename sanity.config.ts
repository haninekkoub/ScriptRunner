import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { singletonTools } from "sanity-plugin-singleton-tools";
import { schemaTypes } from "./schemas";
import { structure } from "./schemas/structure";

export default defineConfig({
  name: "default",
  title: "scriptrunner",

  projectId: "imgq8z3v",
  dataset: "production",

  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    visionTool(),
    muxInput({ mp4_support: "standard" }),
    singletonTools(),
  ],
  schema: { types: schemaTypes },
});
