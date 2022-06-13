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
    labelStyle,
    label,
    error = `${label} can not be empty`,
    value,
    onChange,
    placeholder,
    disabled,
    reg = /.+/,
    maxLength = 500,
    description,
    textStyle,
    invalidStyle,
    countStyle,
    descriptionStyle,
    showCount = false,
    returnKeyType
  } = props;
  const isDescriptionString = typeof description === 'string';

  const [focused, setFocused] = React.useState(false);
  const [valid, setValid] = React.useState(true);

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
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          !valid ? styles.error : focused ? styles.focused : styles.blur,
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
        {!valid ? <Text style={[styles.invalid, invalidStyle]}>{error}</Text> : <View style={styles.invalid}/>}
        {showCount && (
          <Text style={[styles.count, countStyle]}>{`${value.length}/${maxLength}`}</Text>
        )}
      </View>
      {description && isDescriptionString && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
      <>
        {description && !isDescriptionString && description}
      </>
    </View>
  );
}

export interface TextAreaProps {
  style?: any;
  labelStyle?: any;
  label?: string;
  error?: string;
  value: string;
  textStyle?: any;
  invalidStyle?: any;
  countStyle?: any;
  descriptionStyle?: any;
  onChange: (value: string, valid: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  reg?: RegExp;
  maxLength?: number;
  description?: string | ReactNode;
  showCount?: boolean,
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
