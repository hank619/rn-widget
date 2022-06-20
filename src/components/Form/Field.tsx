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
import { cloneDeep, get } from 'lodash';
import styles from './Field.style';

interface FieldProps {
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
  }

  componentDidMount() {
    const { registerField } = this.context || {};
    if (registerField) {
      registerField(this);
    }
  }

  getControlled = (childProps: any) => {
    const { getFieldValue, setFieldValue } = this.context || {};
    const cloneProps = cloneDeep(childProps);
    if (getFieldValue) {
      Object.assign(cloneProps, {
        [`${this.valuePropsName}`]: getFieldValue(this.name),
      });
    }
    if (setFieldValue) {
      Object.assign(cloneProps, {
        [`${this.onChangePropsName}`]: (event: any) => {
          setFieldValue(this.name, get(event, this.eventPropsName, event));
        },
      });
    }
    const [ status ] = this.getStatus();
    cloneProps.status = status;
    return cloneProps;
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
      validateStatus = firstError ? 'error': getTouched(this.name) ? 'success' : null;
      help = firstError?.message;
    } else {
      validateStatus= this.validateStatus;
      help = this.help;
    }
    return [validateStatus, help]
  }

  render() {
    const isStringExtra = typeof this.extra === 'string';
    const [ validateStatus, help ] = this.getStatus();
    // @ts-ignore
    const isSelectElement = this.children.type?.name === 'Select';
    const isAndroid = Platform.OS === 'android';

    return (
      // hack logic here for Select element, since Select required zIndex, and the parent has to add zIndex as well
      <View style={[
        isSelectElement && isAndroid && styles.androidContainer,
        isSelectElement && !isAndroid && styles.iosContainer,
        this.style,
      ]}>
        {this.label && <Text style={styles.label}>{this.label}</Text>}
        <>
          {React.cloneElement(this.children, this.getControlled(this.children.props))}
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
