/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-16 19:12:04
 * @Description: 
 */
import { View } from "react-native";
import { Button } from "rn-widget";
import React from "react";

export default function OptionScreen({navigation}: any) {

  return (
    <View style={{padding: 12}}>
      <Button.FWButton onClick={() => navigation.navigate("ActionWidgetScreen")} text="ActionWidgetScreen" style={{marginVertical: 12}} />
      <Button.FWButton onClick={() => navigation.navigate("DisplayWidgetScreen")} text="DisplayWidgetScreen" style={{marginVertical: 12}}/>
      <Button.FWButton onClick={() => navigation.navigate("DynamicFormScreen")} text="DynamicFormScreen" style={{marginVertical: 12}}/>
    </View>
  )
}