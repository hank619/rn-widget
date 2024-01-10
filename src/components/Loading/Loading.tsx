/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-28 15:30:31
 * @Description: 
 */
import React from 'react';
import type { ActivityIndicatorNativeProps } from '@ant-design/react-native/es/activity-indicator';
import { ActivityIndicator as AntDActivityIndicator } from '@ant-design/react-native';
import { Colors } from '../../theme';
import { Modal } from 'react-native';

export interface ILoadingProps extends ActivityIndicatorNativeProps {
}

export default function Loading(props: ILoadingProps) {

  const { text = 'loading', size = 'large', color = Colors.white, ...rest} = props;

  return (
    <Modal transparent>
      <AntDActivityIndicator
        text={text}
        toast
        size={size}
        color={color}
        {...rest}
      />
    </Modal>

  );
}