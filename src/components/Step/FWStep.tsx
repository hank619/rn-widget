/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-14 16:44:51
 * @Description: 
 */
import { Step } from "./index";
import React from 'react';
import styles from './style';

export function FWStep(props: FWStepProps) {

  const { total, current, containerStyle, itemStyle } = props;
  return (
    <Step 
      total={total}
      current={current}
      containerStyle={[styles.fwContainerStyle, containerStyle]}
      itemStyle={[styles.fwItemStyle, itemStyle]}
    />
  )
}

interface FWStepProps {
  total: number;
  current: number;
  containerStyle?: any;
  itemStyle?: any;
}