/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:09
 * @Description:
 */
import React, { ReactNode } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import type { TextInputProps } from 'react-native';
import { Images } from '../../theme';
import styles from './style';

export function Input(props: InputProps) {
  const {
    style,
    label,
    labelStyle,
    prefixStyle,
    textStyle,
    invalidStyle,
    prefix,
    error = `${label} can not be empty`,
    value,
    description,
    descriptionStyle,
    onChange,
    placeholder,
    disabled,
    reg = /.+/,
    keyboardType,
    returnKeyType,
  } = props;

  const [focused, setFocused] = React.useState(false);
  const [valid, setValid] = React.useState(true);
  const isDescriptionString = typeof description === 'string';

  function onFocus() {
    setFocused(true);
  }

  function onBlur() {
    setFocused(false);
    onChangeText(value);
  }

  function onChangeText(text: string) {
    const regTest = reg.test(text);
    setValid(regTest);
    onChange(text, regTest);
  }

  return (
    <View style={style}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
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
            !valid ? styles.error : focused ? styles.focused : styles.blur,
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
        {valid && !!value && (
          <Image source={Images.success} style={styles.suffix} />
        )}
      </View>
      {!valid && <Text style={[styles.invalid, invalidStyle]}>{error}</Text>}
      {!!description && isDescriptionString && (
        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      )}
      <>
        {!!description && !isDescriptionString && (description)}
      </>
    </View>
  );
}

export interface InputProps {
  style?: any;
  labelStyle?: any;
  label?: string;
  prefix?: string;
  prefixStyle?: any,
  textStyle?: any;
  invalidStyle?: any;
  error?: string;
  description?: string | ReactNode;
  descriptionStyle?: any;
  value: string;
  onChange: (value: string, valid: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  reg?: RegExp;
  keyboardType?: TextInputProps['keyboardType'];
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
