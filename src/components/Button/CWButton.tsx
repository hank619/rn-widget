/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-23 11:15:27
 * @Description: Content Width Button
 */
import type { ReactNode } from "react";
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './index';
import styles from './styles';

export function CWButton(props: FWButtonProps) {
  const {
    style,
    text, 
    children,
    onClick,
    type = 'primary',
    disabled,
    capitalize,
    textStyle,
  } = props;
  const finalText = capitalize ? text?.toUpperCase() : text;

  if (disabled) {
    return (
      <View style={[styles.cwContainer, styles.cwContainerDisabled]}>
        {finalText && <Text style={[styles.cwText, styles.cwTextDisabled, style]}>{finalText}</Text>}
        <>
          {!finalText && children}
        </>
      </View>
    )
  }
  return (
    <Button 
      onClick={onClick}
      containerStyle={[styles.cwContainer, type === 'primary' ? styles.cwContainerPrimary : styles.cwContainerSecondary, style]}
      textStyle={[styles.cwText, type === 'primary' ? styles.cwTextPrimary : styles.cwTextSecondary, textStyle]}
      text={finalText}
      children={children}
    />
  )
}

export interface FWButtonProps {
  style?: any;
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  capitalize?: boolean;
  textStyle?: any;
}
