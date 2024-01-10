/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-26 11:47:36
 * @Description:
 */
import type { InputItemProps } from '@ant-design/react-native/es/input-item';
import { InputItem as AntDInput, View, Text } from '@ant-design/react-native';
import React from 'react';
import { Colors, Images } from '../../theme';
import { primePrice, thousandPrice } from '../../util/price';
import { Image } from 'react-native';

export interface IInputProps extends InputItemProps {
  prefix?: any;
  status?: 'success' | 'error';
}

export default function Input(props: IInputProps) {

  const { prefix, style, status, value, onChange, disabled, ...rest } = props;
  const [focused, setFocused] = React.useState(false);

  function onFocus() {
    setFocused(true);
  }

  function onBlur() {
    setFocused(false);
  }

  const handledStyle = Object.assign(style || {},
    disabled ? { backgroundColor: Colors.grey } : {});

  return (
    <View style={
      [
        {
          borderWidth: 1,
          borderColor: Colors.fog,
          borderRadius: 3,
          height: 48,
          display: 'flex',
          flexDirection: 'row',
        },
        focused && { borderColor: Colors.primary },
        status === 'error' && { borderColor: Colors.redMedium },
        disabled && { backgroundColor: Colors.grey }
      ]
    }>
      {prefix && (
        <View
          style={{
            backgroundColor: Colors.grey,
            paddingHorizontal: 12,
          }}
        >
          <Text
            style={{
              color: Colors.stone,
              lineHeight: 48,
              textAlignVertical: 'center',
            }}
          >
            {prefix}
          </Text>
        </View>
      )}
      <View style={{ flex: 1 }}>
        <AntDInput
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          style={handledStyle}
          {...rest}
        />
      </View>
      {status === 'success' && (
        <Image source={Images.success} style={{ alignSelf: 'center', marginRight: 10 }} />
      )}
    </View>
  );
}

Input.BankCard = function(props: any) {
  return (
    <Input 
      type='bankCard'
      {...props}
    />
  );
}

Input.Phone = function(props: {prefix: string, [key: string]: any}) {
  const { prefix, ...rest } = props;
  return (
    <Input 
      type='phone'
      prefix={prefix}
      {...rest}
    />
  );
}

Input.Password = function(props: any) {
  return (
    <Input 
      type='password'
      {...props}
    />
  );
}

Input.Number = function(props: any) {
  return (
    <Input 
      type='number'
      {...props}
    />
  );
}

Input.Amount = function(props: {value?: string, onChange?: any, [key: string]: any}) {

  const { value, onChange, ...rest } = props;
  function amountOnChange(amount: string) {
    const localeAmount = thousandPrice(primePrice(amount));
    if (onChange) {
      onChange(localeAmount);
    }
  }

  return (
    <Input.Number 
      value={value ? thousandPrice(primePrice(value)): ''}
      onChange={amountOnChange}
      {...rest}
    />
  );
}