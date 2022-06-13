/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 16:48:47
 * @Description: 
 */
import type { ReactNode } from 'react';
import styles from './style';
import { Item } from './Item';
import { View, Text } from 'react-native';
import React from 'react';
 
function Card(props: CardProps) {
  const { style, titleStyle, title, children } = props;

  return (
    <View style={[styles.container, style]}>
      {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <>
        {children}
      </>
    </View>  
  )
}

interface CardProps {
  style?: any,
  titleStyle?: any,
  title?: string,
  children: ReactNode[];
}

Card.Item = Item;

export {
  Card,
};