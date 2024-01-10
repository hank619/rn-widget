/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-28 10:40:04
 * @Description: 
 */
import React from 'react';
import type { CheckboxProps } from '@ant-design/react-native/es/checkbox/Checkbox';
import { Checkbox as AntDCheckbox } from '@ant-design/react-native';
import { Colors } from '../../theme';

export interface ICheckboxProps extends CheckboxProps{
  status?: 'success' | 'error';
  value?: any;
  onChange?: any;
}

export default function Checkbox(props: ICheckboxProps) {

  const { status, value, onChange, ...rest} = props;

  const handledStyles = {
    checkbox_inner: {
      backgroundColor: Colors.primary
    },
  };
  if (status === 'error') {
    Object.assign(handledStyles, {
      checkbox: {
        borderColor: Colors.redMedium,
      }
    })
  }

  return (
    <AntDCheckbox 
      checked={value}
      onChange={(e) => {
        onChange(e.target.checked)
      }}
      styles={handledStyles}
      {...rest}
    />
  )
}