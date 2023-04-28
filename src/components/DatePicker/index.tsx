// /*
//  * @Author: Hong.Zhang
//  * @Date: 2021-11-04 16:59:32
//  * @Description: 
//  */
// import { Platform } from "react-native";
// import { DatePickerIos } from "./DatePickerIos";
// import React from "react";
// import { DatePickerAndroid } from "./DatePickerAndroid";
// import type { Moment } from "moment";

// export function DatePicker(props: DatePickerProps) {
//   if (Platform.OS === "ios") {
//     return (
//       <DatePickerIos {...props} />
//     );
//   }
//   return <DatePickerAndroid {...props} />
// }

// export interface DatePickerProps {
//   value?: Moment;
//   status?: 'error' | 'success' | 'warning';
//   onChange?: (moment?: Moment) => void;
//   maximumDate?: Moment;
//   style?: any;
//   textStyle?: any;
// }

import DatePicker from "./DatePicker";
export { DatePicker };