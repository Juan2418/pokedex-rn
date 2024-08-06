import type resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: typeof resources;
  }
}
