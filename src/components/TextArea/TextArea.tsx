/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-26 18:16:48
 * @Description: 
 */
import type { TextareaItemProps } from '@ant-design/react-native/es/textarea-item';
import { TextareaItem as AntDTextArea, View } from "@ant-design/react-native";
import React from 'react';
import { Colors } from '../../theme';

export interface ITextAreaProps extends TextareaItemProps {
  status?: 'success' | 'error';
}

export default function TextArea(props: ITextAreaProps) {

  const { status, rows = 4, ...rest } = props;

  const [focused, setFocused] = React.useState(false);
  function onFocus() {
    setFocused(true);
  }

  function onBlur() {
    setFocused(false);
  }

  return (
    <View style={
      [
        {
          borderWidth: 1,
          borderColor: Colors.fog,
          borderRadius: 3,
        },
        focused && { borderColor: Colors.primary },
        status === 'error' && { borderColor: Colors.redMedium },
      ]
    }>
      <AntDTextArea
        rows={rows}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        styles={{
          input: {
            backgroundColor: Colors.transparent,
          }
        }}
      />
    </View>

  );
}