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
    status,
    value,
    textStyle,
    onChange,
    options,
    disabled,
    onChangeFocus,
  } = props;

  const [focused, setFocused] = React.useState(false);
  const [expand, setExpand] = React.useState<boolean|undefined>();
  const [yInParent , setYInParent] = React.useState(0);
  const [direction, setDirection] = React.useState('top');
  const parentRef = useRef(null);
  const guidelineRef = useRef(null);
  const isAndroid = Platform.OS === 'android';
  const isDirectionTop = direction === 'top';

  useEffect(() => {
    setFocused(!!expand);
    // in order to tell field that select is expanded and need to raise zindex for it.
  }, [expand]);

  async function toggleSelect() {
    if (guidelineRef.current) {
      // @ts-ignore-next-line
      guidelineRef.current.measureInWindow((_: number, y: number) => {
        const screenHeight = Dimensions.get('window').height
        const overflow = y + 48 + 240 > screenHeight;
        setDirection(overflow ? 'bottom': 'top');
        setExpand(ex => !ex);
        if (onChangeFocus) {
          onChangeFocus(true);
        }
      });
      // @ts-ignore-next-line
      guidelineRef.current.measureLayout(parentRef.current, (_: number, y: number) => {
        setYInParent(y);
      }); 
    }
  }

  function getDropdown() {
    const decoredOptions = typeof options === 'function' ? options() : options;
    return decoredOptions.map((option, _) => {
      const selected = option.value === value;
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            if (onChange) {
              onChange(option.value);
            }
            setExpand(false);
            if (onChangeFocus) {
              onChangeFocus(false);
            }
          }}
          key={option.value}
        >
          <View 
            style={[styles.itemContainer, selected ? styles.selected : styles.notSelected]}
          >
            <Text style={[styles.itemText, textStyle]}>
              {option.label}
            </Text>
            {selected && <Image source={Images.correct} style={styles.itemImage}/>}
          </View>
        </TouchableWithoutFeedback>
      );
    });
  }

  return (
    <View ref={parentRef} style={[isAndroid ? styles.androidContainer: styles.iosContainer, style]}>
      <TouchableWithoutFeedback
        onPress={toggleSelect}
      >
        <View style={[styles.selectContainer]}>
          <Text
            style={[
              styles.content,
              focused ? styles.focused : styles.blur,
              expand && isDirectionTop && styles.expandTop,
              expand && !isDirectionTop && styles.expandBototm,
              // @ts-ignore
              status && status !== 'success' && styles[status],
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
    </View>
  );
}

export interface SelectProps {
  style?: any;
  status?: 'error' | 'success' | 'warning';
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string, value: string }[] | (() => ({ label: string, value: string }[]));
  textStyle?: any;
  disabled?: boolean;
  onChangeFocus?: (focused: boolean) => void;
}
