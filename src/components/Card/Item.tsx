/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 16:52:43
 * @Description: 
 */
import styles from './style';
import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

export function Item(props: ItemProps) {
  const { style, labelStyle, valueStyle, label, value } = props;
  const isValueString = typeof value === 'string';

  return (
    <View style={[styles.item, style]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <>
        {isValueString ? <Text style={[styles.value, valueStyle]}>{value || '-'}</Text> : value}
      </>
    </View>
  );
}

interface ItemProps {
  style?: any;
  label: string;
  labelStyle?: any,
  value?: string | ReactNode;
  valueStyle?: any;
}