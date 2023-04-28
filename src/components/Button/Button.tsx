/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-26 11:47:36
 * @Description:
 */
import type { ButtonProps } from '@ant-design/react-native/es/button';
import { Button as AntDButton, Text } from '@ant-design/react-native';
import React from 'react';
import { Colors } from '../../theme';

export type IButtonProps = Omit<ButtonProps, 'type'> & {
  type?: ButtonProps['type'] | 'link';
  action?: string;
}

export default function Button(props: IButtonProps) {

  const { type, style, disabled, children, ...rest } = props;

  function getHeight() {
    return { height: 48};
  }
  
  function getBackground() {
    switch (type) {
      case 'primary':
        return { backgroundColor: Colors.primary };
      case 'warning':
        return { backgroundColor: Colors.redMedium};
      case 'ghost':
        return { backgroundColor: Colors.transparent};
      default:
        return {backgroundColor: Colors.white};
    }
  }

  function getOpacity() {
    return disabled ? { opacity: 0.3 } : {}; 
  }

  function getBorder() {
    switch (type) {
      case 'primary':
        return { borderWidth: 1, borderColor: Colors.primary};;
      case 'warning':
        return { borderWidth: 1, borderColor: Colors.redMedium};;
      case 'ghost':
        return { borderWidth: 1, borderColor: Colors.grey};
      case 'link':
        return { borderWidth: 1, borderColor: Colors.transparent};
      default:
        return { borderWidth: 1, borderColor: Colors.primary};
    }
  }

  function getActiveBackground() {
    switch (type) {
      case 'primary':
        return { backgroundColor: Colors.primaryMedium };
      case 'warning':
        return { backgroundColor: Colors.redLight};
      case 'ghost':
        return { backgroundColor: Colors.transparent};
      default:
        return {backgroundColor: Colors.grey};
    }
  }

  function getTextStyle() {
    switch (type) {
      case 'primary':
        return { color: Colors.white};
      case 'warning':
        return { color: Colors.white };
      case 'ghost':
        return { color: Colors.black };
      default:
        return  {color: Colors.primary};
    }
  }

  return (
    <AntDButton
      style={[getBackground(), getOpacity(), getBorder(), getHeight(), style]}
      activeStyle={getActiveBackground()}
      disabled={disabled}
      {...rest}
    >
      {typeof children === 'string' ? (
        <Text style={getTextStyle()}>
          {children}
        </Text>
      ): children}
    </AntDButton>
  );
}