
/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 15:18:33
 * @Description: 
 */
import styles from "./style";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { Images } from "../../theme";

export function RadioGroup(props: RadioGroupProps) {
  const { style, textStyle, value, onChange, options } = props;

  return (
    <View style={[styles.container, style]}>
      {options.map((option, index) => {
        const isSelected = option.value === value;
        const isFirst = index === 0;
        return (
          <TouchableWithoutFeedback key={index} onPress={() => onChange(option.label, option.value)}>
            <View style={[styles.itemContainer, isSelected ? styles.selected: styles.unselected, isFirst ? styles.first: styles.notFirst]}>
              <Text style={[styles.text, textStyle]}>{option.label}</Text>
              <Image style={[styles.image, isSelected ? styles.imageSelected: styles.imageUnselected]} source={isSelected ? Images.selected: Images.unselected}/>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

export interface RadioGroupProps {
  style?: any;
  textStyle?: any;
  value: any;
  onChange: (label: string, value: string) => void;
  options: Array<{ label: string, value: string }>;
}