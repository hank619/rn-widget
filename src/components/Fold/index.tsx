/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-26 16:02:44
 * @Description: 
 */
import React, { useState } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Images } from "../../theme";
import styles from './style'

export function Fold(props: FoldProps) {
  const { style, title, titleStyle, contentStyle, content, children } = props;
  const [fold, setFold] = useState(true);

  return (
    <View style={[styles.foldContainer, style]}>
      <TouchableWithoutFeedback onPress={() => setFold(!fold)}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Image style={[styles.icon, fold ? styles.fold : styles.unFold]} source={Images.arrowUp} />
        </View>
      </TouchableWithoutFeedback>
      {!!content && !fold && <Text style={[styles.content, contentStyle]}>{content}</Text>}
      <>
        {!content && !fold && children}
      </>
    </View>
  );
}

export interface FoldProps {
  style?: any;
  title: string;
  titleStyle?: any;
  contentStyle?: any;
  content?: string;
  children?: React.ReactNode;
}