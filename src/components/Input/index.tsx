/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:09
 * @Description:
 */
import React from 'react';
import type { TextInputProps } from 'react-native';
import { Image, Text, TextInput, View } from 'react-native';
import { Images } from '../../theme';
import styles from './style';

export function Input(props: InputProps) {
  const {
    style,
    prefixStyle,
    textStyle,
    prefix,
    status,
    value,
    onChange,
    placeholder,
    disabled,
    keyboardType,
    returnKeyType,
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
    <View style={style}>
      <View style={[styles.inputContainer]}>
        {prefix && (
          <View style={styles.prefixContainer}>
            <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>
          </View>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[
            prefix ? styles.inputWithPrefix : styles.inputWithoutPrefix,
            focused ? styles.focused : styles.blur,
            status && status !== 'success' && styles[status],
            disabled ? styles.disabled : styles.enabled,
            textStyle,
          ]}
          placeholder={placeholder}
          editable={!disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
        />
        {status === 'success' && (
          <Image source={Images.success} style={styles.suffix} />
        )}
      </View>
    </View>
  );
}

export interface InputProps {
  style?: any;
  status?: 'success' | 'error' | 'warning';
  prefix?: string;
  prefixStyle?: any,
  textStyle?: any;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
