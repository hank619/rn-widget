/*
 * @Author: Hong.Zhang
 * @Date: 2021-06-29 17:50:39
 * @LastEditTime: 2022-06-16 15:55:11
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import {
  Image, Modal, SafeAreaView, Text,
  TouchableOpacity, View
} from 'react-native';
import { Images } from '../../theme';
import type { DatePickerProps } from './index';
import styles from './style';


export function DatePickerIos(props: DatePickerProps) {
  const { value, status, onChange, maximumDate, style, textStyle } = props;
  const [showCalendar, setShowCalendar] = useState(false);

  function click() {
    setShowCalendar(true);
  }

  return (
    <TouchableOpacity onPress={click}>
      <View style={[
        styles.dateContainer,
        // @ts-ignore
        status && status !== 'success' && styles[status],
        style,
      ]}>
        <Text style={[styles.dateText, textStyle]}>
          {value ? value.format('DD / MM / YYYY') : 'DD / MM / YYYY'}
        </Text>
        <Image style={styles.dateIcon} source={Images.calendar} />
        <Modal visible={showCalendar}>
          <SafeAreaView style={styles.safeArea}>
            <DateTimePicker
              display="spinner"
              value={value?.toDate() || new Date()}
              onChange={(_: any, d?: Date) => {
                if (d && onChange) {
                  onChange(moment(d));
                }
              }}
              maximumDate={maximumDate?.toDate()}
            />
            <TouchableOpacity
              style={styles.confirmContainer}
              onPress={() => {
                setShowCalendar(false);
              }}
            >
              <Text style={styles.confirmText}>
                Confirm
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}
