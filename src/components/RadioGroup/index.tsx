
/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 15:18:33
 * @Description: 
 */
import styles from "./style";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { Images } from "../../theme";

/**
 * RadioGroup has no status props since we didn't design the error status of it.
 * @param props 
 * @returns 
 */
export interface IRadioGroupProps {
  value?: any;
  onChange?: (value: string) => void;
  options: Array<{ label: string, value: string }>;
}

export function RadioGroup(props: IRadioGroupProps) {
  const { value, onChange, options } = props;

  return (
    <View style={[styles.container]}>
      {options.map((option, index) => {
        const isSelected = option.value === value;
        const isFirst = index === 0;
        return (
          <TouchableWithoutFeedback 
            key={index} 
            onPress={() => {
              if (onChange) {
                onChange(option.value)
              }
            }}>
            <View style={[styles.itemContainer, isSelected ? styles.selected: styles.unselected, isFirst ? styles.first: styles.notFirst]}>
              <Text style={[styles.text]}>{option.label}</Text>
              <Image style={[styles.image, isSelected ? styles.imageSelected: styles.imageUnselected]} source={isSelected ? Images.selected: Images.unselected}/>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

