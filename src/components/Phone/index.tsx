/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 15:45:37
 * @Description: 
 */
import React, { ReactNode } from "react";
import { Input } from "../Input";

export function Phone(props: PhoneProps) {
  const { 
    style, 
    labelStyle,
    countryCode, 
    value, 
    onChange, 
    error, 
    label, 
    disabled, 
    descrition, 
    descritionStyle,
    prefixStyle,
    textStyle,
    invalidStyle,
    returnKeyType
  } = props;

  return (
    <Input
      style={style}
      labelStyle={labelStyle}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      prefix={countryCode}
      reg={/^[0-9]+$/}
      keyboardType="numeric"
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

export interface PhoneProps {
  style: any;
  labelStyle?: any;
  countryCode: string;
  value: string;
  onChange: (value: string, valid: boolean) => void;
  error?: string;
  label?: string;
  disabled?: boolean;
  descrition?: string | ReactNode;
  descritionStyle?: any;
  prefixStyle?: any,
  textStyle?: any;
  invalidStyle?: any;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
