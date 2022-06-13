/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-23 11:15:20
 * @Description: 
 */
import { FWButton } from "./FWButton";
import { CWButton } from "./CWButton";
import type { ReactNode } from "react";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Button = (props: ButtonProps) => {
  const { containerStyle, textStyle, children, text, onClick, disabled, capitalize } = props;
  const finalText = capitalize ? text?.toUpperCase() : text;

  if (disabled) {
    return (
      <View
        style={[styles.baseButtonContainer, containerStyle]}
      >
        {text && <Text style={textStyle}>{capitalize ? text.toUpperCase(): text}</Text>}
        <>
          {!text && children}
        </>
      </View>
    )
  }
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.baseButtonContainer, containerStyle]}
    >
      {finalText && <Text style={textStyle}>{finalText}</Text>}
      <>
        {!finalText && children}
      </>
    </TouchableOpacity>
  )
}

interface ButtonProps {
  containerStyle?: any;
  textStyle?: any;
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  capitalize?: boolean;
}

Button.FWButton = FWButton;
Button.CWButton = CWButton;

export { Button };