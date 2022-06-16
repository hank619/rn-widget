/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 16:39:23
 * @Description: 
 */
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView, Text,
  TouchableOpacity, View
} from 'react-native';
import { Images } from '../../theme';
import type { DatePickerProps } from './index';
import styles from './style';

export function DatePickerAndroid(props: DatePickerProps) {
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
        {showCalendar && (
          <View style={styles.absoluteContainer}>
            <SafeAreaView style={styles.safeArea}>
              <DateTimePicker
                display="spinner"
                value={value?.toDate() || new Date()}
                onChange={(_: any, d?: Date) => {
                  setShowCalendar(false);
                  if (d && onChange) {
                    onChange(moment(d));
                  }
                }}
                maximumDate={maximumDate?.toDate()}
              />
            </SafeAreaView>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

