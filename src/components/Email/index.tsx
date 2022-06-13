/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 15:51:12
 * @Description: 
 */
import React, { ReactNode } from "react";
import { Input } from "../Input";

export function Email(props: EmailProps) {
  const {
    style, 
    labelStyle,
    value, 
    onChange, 
    error, 
    label, 
    placeholder, 
    disabled, 
    descrition, 
    descritionStyle,
    prefixStyle,
    textStyle,
    invalidStyle,
    returnKeyType,
  } = props;

  return (
    <Input
      style={style}
      labelStyle={labelStyle}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      placeholder={placeholder}
      keyboardType="email-address"
      reg={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}
      disabled={disabled}
      description={descrition}
      descriptionStyle={descritionStyle}
      prefixStyle={prefixStyle}
      textStyle={textStyle}
      invalidStyle={invalidStyle}
      returnKeyType={returnKeyType}
    />
  );
}

export interface EmailProps {
  style: any;
  labelStyle?: any;
  value: string;
  onChange: (value: string, valid: boolean) => void;
  error?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  descrition?: string | ReactNode;
  descritionStyle?: any;
  prefixStyle?: any,
  textStyle?: any;
  invalidStyle?: any;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}