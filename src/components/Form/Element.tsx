/*
 * @Author: Hong.Zhang
 * @Date: 2022-07-04 13:39:05
 * @Description: 
 */
import type { Rule } from "async-validator";
import invariant from "invariant";
import type { Asset } from 'react-native-image-picker';
import { ElementMap } from "./ElementMap";

import Field from "./Field";

import React from "react";

export default function Element(props: ElementProps) {
  const {
    type,
    render,
    name,
    label,
    extra,
    rule,
    dependencies,
    valuePropsName,
    onChangePropsName,
    eventPropsName,
    ...rest
  } = props;

  invariant(!!type || !!render, "type or render in element is required");
  if (type) {
    // ActionWidget
    const TagName = ElementMap[type];
    invariant(!!TagName, `${type} is not a valid element type`);
    invariant(!!name, "for ActionWidget, name is required");
    return (
      <Field
        name={name}
        label={label}
        extra={extra}
        rule={rule}
        dependencies={dependencies}
        valuePropsName={valuePropsName}
        onChangePropsName={onChangePropsName}
        eventPropsName={eventPropsName}
      >
        <TagName 
          {...rest}
        />
      </Field>
    )
  } else {
    // DisplayWidget
    return render ? render() : null;
  }
}

export interface ElementProps  {
  // props for Field
  type?: ActionWidgetType;
  render?: () => React.ReactElement;
  name?: string;
  label?: string;
  extra?: string;
  rule?: Rule;
  dependencies?: string[];
  valuePropsName?: string;
  onChangePropsName?: string;
  eventPropsName?: string;

  // props for children
  options?: { label: string, value: string }[] | (() => ({ label: string, value: string }[]));
  includeBase64?: boolean;
  uploadMethod?: (asset: Asset ,uuid: string) => Promise<any>;
}

type ActionWidgetType = 'Input' | 'Amount' | 'TextArea' | 'Checkbox' | 'RadioGroup' | 'Select' | 'DatePicker' | 'Upload';