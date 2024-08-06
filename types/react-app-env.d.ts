declare module "*.png" {
  import { type ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;

  export default content;
}

declare module "*.json";

declare module "@env" {
  export const API_URL: string;
}
