/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-13 14:47:20
 * @Description: 
 */
import { Colors } from "../../theme";
import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './style';

export function Loading(props: LoadingProps) {

  const { visible, color = Colors.primary, size = 'large' } = props;
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.fullScreen}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <ActivityIndicator
            size={size}
            color={color}
          />
        </View>
      </View>
    </View>
  );
}

export interface LoadingProps {
  color?: any,
  size?: 'small' | 'large',
  visible: boolean,
}