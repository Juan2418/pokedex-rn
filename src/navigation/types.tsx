import type { ParamListBase } from "@react-navigation/native";

export interface FullScreenStackParamList {
  [key: string]: ParamListBase;
  DatePicker: ParamListBase;
  FormExample: ParamListBase;
}

export interface RootStackParamList {
  [key: string]: ParamListBase;
  Login: ParamListBase;
  SignUp: ParamListBase;
  TabStack: ParamListBase;
}
