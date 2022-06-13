/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-22 15:24:37
 * @Description: 
 */
import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, Text, TouchableWithoutFeedback, View, Platform, ScrollView } from 'react-native';
import { Images } from '../../theme';
import styles from './style';

export function Select(props: SelectProps) {
  const {
    style,
    labelStyle,
    label,
    error = `${label} can not be empty`,
    value,
    textStyle,
    onChange,
    items,
    invalidStyle,
    disabled,
  } = props;

  const [focused, setFocused] = React.useState(false);
  const [valid ,setValid] = React.useState(true);
  const [expand, setExpand] = React.useState<boolean|undefined>();
  const [yInParent , setYInParent] = React.useState(0);
  const [direction, setDirection] = React.useState('top');
  const parentRef = useRef(null);
  const guidelineRef = useRef(null);
  const isAndroid = Platform.OS === 'android';
  const isDirectionTop = direction === 'top';

  useEffect(() => {
    setFocused(!!expand);
    if (expand !== undefined) {
      setValid(!!value || expand);
    }
  }, [expand, value]);

  async function toggleSelect() {
    if (guidelineRef.current) {
      // @ts-ignore-next-line
      guidelineRef.current.measureInWindow((_: number, y: number) => {
        const screenHeight = Dimensions.get('window').height
        const overflow = y + 48 + 240 > screenHeight;
        setDirection(overflow ? 'bottom': 'top');
        setExpand(ex => !ex);
      });
      // @ts-ignore-next-line
      guidelineRef.current.measureLayout(parentRef.current, (_: number, y: number) => {
        setYInParent(y);
      }); 
    }
  }

  function getDropdown() {
    return items.map((item, _) => {
      const selected = item.value === value;
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            onChange(item.value);
            setExpand(false);
          }}
          key={item.value}
        >
          <View 
            style={[styles.itemContainer, selected ? styles.selected : styles.notSelected]}
          >
            <Text style={[styles.itemText, textStyle]}>
              {item.label}
            </Text>
            {selected && <Image source={Images.correct} style={styles.itemImage}/>}
          </View>
        </TouchableWithoutFeedback>
      );
    });
  }

  return (
    <View ref={parentRef} style={[isAndroid ? styles.androidContainer: styles.iosContainer, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableWithoutFeedback
        onPress={toggleSelect}
      >
        <View style={[styles.selectContainer]} >
          <Text
            style={[
              styles.content,
              !valid ? styles.error : focused ? styles.focused : styles.blur,
              expand && isDirectionTop && styles.expandTop,
              expand && !isDirectionTop && styles.expandBototm,
              disabled ? styles.disabled : styles.enabled,
              textStyle,
            ]}
          >
            {value}
          </Text>
          <Image 
            source={Images.arrowUp} 
            style={expand ? styles.arrowUp : styles.arrowReverse}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.guideline} ref={guidelineRef}/>
      {expand && (
        <View
          style={[styles.dropdown, isDirectionTop ? styles.dropdownTop : styles.dropdownBottom, {[direction]: isDirectionTop ? yInParent - 1: 47}]}
        >
          <ScrollView
            nestedScrollEnabled={true}
          >
            {getDropdown()}
          </ScrollView>
        </View>
      )}
      {!valid && <Text style={[styles.invalid, invalidStyle]}>{error}</Text>}
    </View>
  );
}

export interface SelectProps {
  style?: any;
  labelStyle?: any;
  label?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  items: { label: string, value: string }[];
  disabled?: boolean;
  textStyle?: any;
  invalidStyle?: any;
}
