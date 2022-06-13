/*
 * @Author: Hong.Zhang
 * @Date: 2021-06-29 17:50:39
 * @LastEditTime: 2021-12-15 16:13:14
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Image, Modal, SafeAreaView, Text,
  TouchableOpacity, View
} from 'react-native';
import { Images } from '../../theme';
import type { DatePickerProps } from './index';
import styles from './style';


export function DatePickerIos(props: DatePickerProps) {
  const { onChange, maximumDate, style, labelStyle, textStyle, label } = props;
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  function click() {
    setShowCalendar(true);
  }

  useEffect(() => {
    onChange(date);
  }, [date, onChange]);

  return (
    <TouchableOpacity onPress={click}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.dateContainer, style]}>
        <Text style={[styles.dateText, textStyle]}>
          {date ? moment(date).format('DD / MM / YYYY') : 'DD / MM / YYYY'}
        </Text>
        <Image style={styles.dateIcon} source={Images.calendar} />
        <Modal visible={showCalendar}>
          <SafeAreaView style={styles.safeArea}>
            <DateTimePicker
              display="spinner"
              value={date || new Date()}
              onChange={(_: any, d?: Date) => {
                if (d) {
                  setDate(d);
                }
              }}
              maximumDate={maximumDate}
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
