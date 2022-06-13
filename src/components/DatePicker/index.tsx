/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 16:59:32
 * @Description: 
 */
import { Platform } from "react-native";
import { DatePickerIos } from "./DatePickerIos";
import React from "react";
import { DatePickerAndroid } from "./DatePickerAndroid";

export function DatePicker(props: DatePickerProps) {
  if (Platform.OS === "ios") {
    return (
      <DatePickerIos {...props} />
    );
  }
  return <DatePickerAndroid {...props} />
}

export interface DatePickerProps {
  onChange: (date?: Date) => void;
  maximumDate?: Date;
  style?: any;
  labelStyle?: any;
  textStyle?: any;
  label?: string;
}
