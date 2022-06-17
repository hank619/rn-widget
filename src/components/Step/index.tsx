/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-14 16:44:26
 * @Description: 
 */
import styles from "./style";
import { View } from 'react-native';
import React from 'react';
import { FWStep } from "./FWStep";
import { CWStep } from "./CWStep";

export function Step(props: StepProps) {

  const { containerStyle, itemStyle, total, current } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {Array.from(new Array(total)).map((_, index) => 
        <Item 
          index={index} 
          current={current} 
          style={itemStyle}
          key={index}
        />
      )}
    </View>
  )
}

export interface StepProps {
  containerStyle: any;
  itemStyle: any;
  total: number;
  current: number
}

function Item(props: ItemProps) {
  const { index, current, style } = props;
  const shouldHightlight = index < current;
  return (
    <View 
      style={[
        styles.itemStyle,
        shouldHightlight ? styles.highlight : styles.normal, 
        index === 0 ? styles.first : styles.notFirst,
        style
      ]}
    />
  )
}

interface ItemProps {
  index: number;
  current: number;
  style: any;
}


Step.FWStep = FWStep;
Step.CWStep = CWStep;