/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:13
 * @Description: 
 */
import type { Rule } from "async-validator";
import invariant from "invariant";
import React, { Component } from 'react';
import FiledContext from "./FieldContext";
import { View, Text, Platform } from 'react-native';
import { get } from 'lodash';
import styles from './Field.style';

export interface FieldProps {
  name: string;
  label?: string;
  validateStatus?: 'success' | 'error' | 'warning';
  help?: string;
  extra?: string;
  children: React.ReactElement;
  rule?: Rule;
  valuePropsName?: string;
  onChangePropsName?: string;
  eventPropsName?: string;
  style?: any;
  dependencies?: string[];
  onChangeFocusPropsName?: string;
}

export default class Field extends Component<FieldProps> {

  static contextType = FiledContext;

  name: string;
  label?: string;
  validateStatus?: string;
  help?: string;
  extra?: string;
  rule?: Rule;
  children: React.ReactElement;
  valuePropsName: string;;
  onChangePropsName: string;
  eventPropsName: string;
  style?: any;
  dependencies?: string[];
  onChangeFocusPropsName: string;

  constructor(props: FieldProps) {
    super(props);
    invariant(!!props.name, "name in filed is required");
    invariant(!!props.children && React.isValidElement(props?.children), "children in filed is not valid");
    this.name = props.name;
    this.label = props.label;
    this.validateStatus = props.validateStatus;
    this.help = props.help;
    this.extra = props.extra;
    this.rule = props.rule;
    this.children = props.children;
    this.valuePropsName = props.valuePropsName || "value";
    this.onChangePropsName = props.onChangePropsName || "onChange";
    this.eventPropsName = props.eventPropsName || "";
    this.style = props.style;
    this.dependencies = props.dependencies;
    this.onChangeFocusPropsName = props.onChangeFocusPropsName || 'onChangeFocus';
  }

  componentDidMount() {
    const { registerField } = this.context || {};
    if (registerField) {
      registerField(this);
    }
  }

  getControlled = () => {
    const { getFieldValue, setFieldValue, setFieldFocus } = this.context || {};
    let controlledProps: any = {};
    // try {
    //   // no need to use deepClone
    //   cloneProps = clone(childProps);
    // } catch (e) {
    //   console.log(`childProps: `, childProps);
    //   console.log(`clone childProps failed: `, e);
    //   cloneProps = childProps;
    // }
    if (getFieldValue) {
      Object.assign(controlledProps, {
        [`${this.valuePropsName}`]: getFieldValue(this.name),
      });
    }
    if (setFieldValue) {
      Object.assign(controlledProps, {
        [`${this.onChangePropsName}`]: (event: any) => {
          setFieldValue(this.name, get(event, this.eventPropsName, event));
        },
      });
    }
    if (setFieldFocus) {
      Object.assign(controlledProps, {
        [`${this.onChangeFocusPropsName}`]: (focused: boolean) => {
          setFieldFocus(this.name, focused);
        }
      });
    }
    const [ status ] = this.getStatus();
    controlledProps.status = status;
    return controlledProps;
  }

  onStoreChange = () => {
    this.forceUpdate();
  }

  getStatus = () => {
    // can use field individualy without form
    const isInsideOfForm = !!this.context;
    let validateStatus, help;
    if (isInsideOfForm) {
      const { getFieldError, getTouched } = this.context;
      const fieldError = getFieldError?.(this.name);
      const firstError = fieldError?.[0];
      validateStatus = !getTouched(this.name) ? null : firstError ? 'error': 'success';
      help = firstError?.message;
    } else {
      validateStatus= this.validateStatus;
      help = this.help;
    }
    return [validateStatus, help]
  }

  isFocused = () => {
    const { getFocusedField } = this.context || {};
    return getFocusedField?.() === this.name;
  }

  render() {
    const isStringExtra = typeof this.extra === 'string';
    const [ validateStatus, help ] = this.getStatus();
    const isFocused = this.isFocused();
    // @ts-ignore
    const isSelectElement = this.children.type?.name === 'Select';
    const isAndroid = Platform.OS === 'android';

    return (
      // hack logic here for Select element, since Select required zIndex, and the parent has to add zIndex as well
      <View style={[
        isAndroid && isSelectElement &&  styles.androidContainer,
        !isAndroid && isSelectElement && isFocused &&styles.iosFocusedContainer,
        !isAndroid && isSelectElement && !isFocused &&styles.iosNormalContainer,
        this.style,
      ]}>
        {this.label && <Text style={styles.label}>{this.label}</Text>}
        <>
          {React.cloneElement(this.children, this.getControlled())}
        </>

        {!!validateStatus && validateStatus !== 'success' && !!help && (
          // @ts-ignore
          <Text style={styles[validateStatus]}>
            {help}
          </Text>
        )}
        {!!this.extra && isStringExtra && (
          <Text style={styles.extra}>{this.extra}</Text>
        )}
        <>
          {!!this.extra && !isStringExtra && (this.extra)}
        </>
      </View>
    )
  }
}
