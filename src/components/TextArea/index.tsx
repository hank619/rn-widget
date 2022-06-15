/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:09
 * @Description:
 */
import React, { ReactNode } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './style';

export function TextArea(props: TextAreaProps) {
  const {
    style,
    status,
    value,
    onChange,
    placeholder,
    disabled,
    maxLength = 500,
    textStyle,
    countStyle,
    showCount = false,
    returnKeyType
  } = props;

  const [focused, setFocused] = React.useState(false);

  function onFocus() {
    setFocused(true);
  }

  function onBlur() {
    setFocused(false);
  }

  function onChangeText(text: string) {
    if (onChange) {
      onChange(text);
    }
  }

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          focused ? styles.focused : styles.blur,
          // @ts-ignore
          status && status !== 'success' && styles[status],
          disabled ? styles.disabled : styles.enabled,
          textStyle
        ]}
        placeholder={placeholder}
        editable={!disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        multiline
        returnKeyType={returnKeyType}
      />
      <View style={styles.bottomContainer}>
        {showCount && (
          <Text style={[styles.count, countStyle]}>{`${value?.length??0}/${maxLength}`}</Text>
        )}
      </View>
    </View>
  );
}

export interface TextAreaProps {
  style?: any;
  status?: 'success' | 'error' | 'warning';
  value?: string;
  textStyle?: any;
  countStyle?: any;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  description?: string | ReactNode;
  showCount?: boolean,
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
