/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-14 16:44:38
 * @Description: 
 */
import { Step } from "./index";
import React from 'react';
import styles from './style';

export function CWStep(props: CWStepProps) {

  const { total, current, containerStyle, itemStyle } = props;
  return (
    <Step 
      total={total}
      current={current}
      containerStyle={[styles.cwContainerStyle, containerStyle]}
      itemStyle={[styles.cwItemStyle, itemStyle]}
    />
  )
}

interface CWStepProps {
  total: number;
  current: number;
  containerStyle?: any;
  itemStyle?: any;
}