/*
 * @Author: Hong.Zhang
 * @Date: 2023-04-28 16:00:58
 * @Description:
 */
import type { DatePickerProps } from '@ant-design/react-native/es/date-picker';
import { DatePickerView as AntDDatePickerView } from '@ant-design/react-native';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import moment from 'moment';
import { Colors, Images } from '../../theme';
import { Button } from '../Button';

export interface IDatePickerProps extends DatePickerProps {
  status?: 'success' | 'error';
}

export default function DatePicker(props: IDatePickerProps) {
  const { value, onChange, status, disabled, ...rest } = props;
  const [internalValue, setInternalValue] = useState<Date | undefined>();
  const [visible, setVisible] = useState(false);

  return (

    <View
      style={[{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderWidth: 1,
        borderColor: Colors.fog,
        borderRadius: 3,
        paddingHorizontal: 12,
      },
      status === 'error' && { borderColor: Colors.redMedium },
      disabled && { backgroundColor: Colors.grey }
      ]}
    >
      <TouchableOpacity
        style={{
          flex: 1,
        }}
        onPress={() => setVisible(true)}
      >
        <Text>
          {value ? moment(value).format('DD / MM / YYYY') : 'DD / MM / YYYY'}
        </Text>
      </TouchableOpacity>
      <Image source={Images.calendar} />
      {visible && (
        <Modal
          transparent
        >
          <View
            style={{ backgroundColor: Colors.mask, height: '100%', position: 'relative' }}
          >
            <View
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: Colors.white,
                position: 'absolute',
                
              }}
            >
              <View
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
              >
                <Button 
                  type='link'
                  onPress={() => {
                    setVisible(false);
                  }}>
                  Cancel
                </Button>
                <Button 
                  type='link'
                  onPress={() => {
                    onChange!!(internalValue || new Date())
                    setVisible(false);
                  }}
                >
                  Confirm
                </Button>
              </View>
              <AntDDatePickerView
                mode="date"
                value={internalValue}
                onChange={(d) => setInternalValue(d)}
                {...rest}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>

  );
}