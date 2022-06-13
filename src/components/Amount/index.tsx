/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 14:33:28
 * @Description:
 */
import { Input } from 'rn-widget';
import React, { ReactNode } from 'react';
import { primePrice, thousandPrice } from '../../util/price';

export function Amount(props: AmountProps) {
  const { 
    style,
    labelStyle,
    currency, 
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

  function amountOnChange(amount: string, valid: boolean) {
    const localeAmount = thousandPrice(primePrice(amount));
    onChange(localeAmount, valid);
  }

  return (
    <Input
      style={style}
      labelStyle={labelStyle}
      label={label}
      value={value}
      onChange={amountOnChange}
      error={error}
      prefix={currency}
      reg={/^[0-9,]+(.[0-9]{1,2})?$/}
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

export interface AmountProps {
  style: any;
  labelStyle?: any;
  prefixStyle?: any,
  textStyle?: any;
  invalidStyle?: any;
  currency: string;
  value: string;
  onChange: (value: string, valid: boolean) => void;
  error?: string;
  label?: string;
  disabled?: boolean;
  descrition?: string | ReactNode;
  descritionStyle?: any;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
