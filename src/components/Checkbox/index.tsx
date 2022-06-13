
/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 13:55:26
 * @Description: 
 */
import type { ReactNode } from "react";
import React from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from "react-native";
import styles from './style';
import { Images, Colors } from '../../theme';

export function Checkbox(props: CheckboxProps) {
  const { style, value, onChange, textStyle, content, checkedColor = Colors.primary, uncheckedColor = Colors.stone } = props;
  const isContentString = typeof content === 'string';

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() =>  onChange(!value)} hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
        <Image style={[styles.checkbox, value ? {tintColor: checkedColor} : {tintColor: uncheckedColor}]} source={value ? Images.checked : Images.unchecked} />
      </TouchableWithoutFeedback>
      <View style={styles.contentContainer}>
        <>
          {isContentString ? <Text style={[styles.content, textStyle]}>{content}</Text> : content}
        </>
      </View>
    </View>
  )

}

export interface CheckboxProps {
  style?: any;
  value: boolean;
  textStyle?: any;
  onChange: (checked: boolean) => void;
  content?: string | ReactNode;
  checkedColor?: string;
  uncheckedColor?: string;
}