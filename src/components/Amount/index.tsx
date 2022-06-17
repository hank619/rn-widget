/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 14:33:28
 * @Description:
 */
import React from 'react';
import { Input } from 'rn-widget';
import { primePrice, thousandPrice } from '../../util/price';

export function Amount(props: AmountProps) {
  const { 
    style,
    status,
    currency, 
    value, 
    onChange, 
    disabled, 
    prefixStyle,
    textStyle,
    returnKeyType
  } = props;

  function amountOnChange(amount: string) {
    const localeAmount = thousandPrice(primePrice(amount));
    if (onChange) {
      onChange(localeAmount);
    }
  }

  return (
    <Input
      style={style}
      status={status}
      value={value ? thousandPrice(primePrice(value)): ''}
      onChange={amountOnChange}
      prefix={currency}
      keyboardType="numeric"
      disabled={disabled}
      prefixStyle={prefixStyle}
      textStyle={textStyle}
      returnKeyType={returnKeyType}
    />
  );
}

export interface AmountProps {
  style?: any;
  status?: 'success' | 'error' | 'warning';
  prefixStyle?: any;
  textStyle?: any;
  currency: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}
