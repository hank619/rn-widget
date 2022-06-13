/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-23 11:15:27
 * @Description: Full Width Button
 */
import type { ReactNode } from "react";
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './index';
import styles from './styles';

export function FWButton(props: FWButtonProps) {
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
      <View style={[styles.fwContainer, styles.fwContainerDisabled, style]}>
        {finalText && <Text style={[styles.fwText, styles.fwTextDisabled, textStyle]}>{finalText}</Text>}
        <>
          {!finalText && children}
        </>
      </View>
    )
  }
  return (
    <Button 
      onClick={onClick}
      containerStyle={[styles.fwContainer, type === 'primary' ? styles.fwContainerPrimary : styles.fwContainerSecondary, style]}
      textStyle={[styles.fwText, type === 'primary' ? styles.fwTextPrimary : styles.fwTextSecondary, textStyle]}
      text={finalText}
      children={children}
    />
  );
}

export interface FWButtonProps {
  style?: any;
  textStyle?: any;
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  capitalize?: boolean;
}
