/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:13
 * @Description: 
 */
import type { Rules } from "async-validator";
import invariant from "invariant";
import React, { Component } from 'react';
import FiledContext from "./FieldContext";

interface FieldProps {
  name: string;
  children: React.ReactElement;
  rules?: Rules;
  valuePropsName?: string;
  onChangePropsName?: string;
}

export default class Field extends Component<FieldProps> {

  static contextType = FiledContext;

  name: string;
  rules?: Rules;
  children: React.ReactElement;
  valuePropsName: string;;
  onChangePropsName: string;

  constructor(props: FieldProps) {
    super(props);
    invariant(!!props.name, "name in filed is required");
    invariant(!!props.children && React.isValidElement(props?.children), "children in filed is not valid");
    this.name = props.name;
    this.children = props.children;
    this.rules = props.rules;
    this.valuePropsName = props.valuePropsName || "value";
    this.onChangePropsName = props.onChangePropsName || "onChange";
  }

  componentDidMount() {
    const { registerField } = this.context;
    registerField(this);
  }

  getControlled = (childProps: any) => {
    const { getFieldValue, setFieldValue } = this.context;
    return {
      ...childProps,
      [`${this.valuePropsName}`]: getFieldValue(this.name),
      [`${this.onChangePropsName}`]: (event: any) => setFieldValue(this.name, event.target.value),
    }
  }

  render() {
    return (
      <>
        {React.cloneElement(this.children, this.getControlled(this.children.props))}
      </>
    )
  }
}
