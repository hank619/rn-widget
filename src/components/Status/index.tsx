/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-24 18:05:20
 * @Description: 
 */
import styles from './style';
import React from 'react';
import { Text } from 'react-native';

export function Status(props: StatusProps) {
  const { type, status, style } = props;
  return (
    <Text style={[styles.text, styles[type], style]}>
      {status}
    </Text>
    
  )
}

export interface StatusProps {
  type: 'success' | 'info' | 'warning' | 'error' | 'invalid';
  status: string;
  style?: any;
}