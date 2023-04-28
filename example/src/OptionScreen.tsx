/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-16 19:12:04
 * @Description: 
 */
import React from "react";
import { View } from "react-native";
import { Button } from "rn-widget";

export default function OptionScreen({navigation}: any) {

  return (
    <View style={{padding: 12}}>
      <Button onPress={() => navigation.navigate("ActionWidgetScreen")} style={{marginVertical: 12}} type="primary">
        ActionWidgetScreen
      </Button>
      <Button onPress={() => navigation.navigate("DisplayWidgetScreen")} style={{marginVertical: 12}}>
      DisplayWidgetScreen
        </Button>
      <Button onPress={() => navigation.navigate("DynamicFormScreen")} style={{marginVertical: 12}}>
      DynamicFormScreen
      </Button>
    </View>
  )
}