/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-25 16:11:16
 * @Description: 
 */
import React from "react";
import styles from "./style";
import { View, Text, Image } from "react-native";
import { Images } from "../../theme";

export function Alert(props: AlertProps) {
  const { style, type, textStyle, text, children } = props;

  function getImage() {
    switch (type) {
      case "success":
        return Images.greenCorrect;
      case "info":
        return Images.blueInfo;
      case "warning":
        return Images.yellowInfo;
      case "error":
        return Images.redInfo;
      default:
        return Images.greenCorrect;
    }
  }

  return (
    <View style={[styles.container, styles[type], style]}>
      <Image
        source={getImage()}
        style={styles.image}
      />
      {!!text && (
        <Text style={[styles.text, textStyle]}>
          {text}
        </Text>
      )}
      <>
        {!text && children}
      </>
    </View>
  )
}

export interface AlertProps {
  style?: any;
  textStyle?: any;
  type: 'success' | 'error' | 'warning' | 'info';
  text: string;
  children?: React.ReactNode;
}