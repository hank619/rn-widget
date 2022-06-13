/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 16:39:23
 * @Description: 
 */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Images } from '../../theme'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import styles from './style';
import type { DatePickerProps } from './index';

export function DatePickerAndroid(props: DatePickerProps) {
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
        {showCalendar && (
          <View style={styles.absoluteContainer}>
            <SafeAreaView style={styles.safeArea}>
              <DateTimePicker
                display="spinner"
                value={date || new Date()}
                onChange={(_: any, d?: Date) => {
                  setShowCalendar(false);
                  if (d) {
                    setDate(d);
                  }
                }}
                maximumDate={maximumDate}
              />
            </SafeAreaView>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

