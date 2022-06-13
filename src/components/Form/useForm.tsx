/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:34:59
 * @Description: 
 */
import { Component, useRef } from "react";
import type Field from './Field';

class FormStore extends Component {

  fieldEntities: (typeof Field)[];
  stores: any;
  callbacks: any;
  touchedEntities: (typeof Field)[];

  constructor(props?: any) {
    super(props);
    this.fieldEntities = [];
    this.stores = {};
    this.callbacks = {};
    this.touchedEntities = [];
  }

  getFieldValue = (name: string) => {
    return this.stores[name];
  }

  getFieldsValue = () => {
    return this.stores;
  }

  setFieldsValue = (values: any) => {
    this.stores = {
      ...this.stores,
      ...values,
    }
  }
  
  setFieldValue = (name: string, value: any) => {
    this.stores = {
      ...this.stores,
      [name]: value,
    }
  }

  registerField = (field: (typeof Field)) => {
    this.fieldEntities.push(field);
  }

  setCallbacks = (callbacks: any) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    }
  }

  setInitialValues = (values: any) => {
    this.stores = {
      ...values,
    }
  }

  submit = () => {
    const {onFinish} = this.callbacks;
    if (onFinish) {
      onFinish(this.stores);
    }
  }

  getForm = (): FormInstance => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      setFieldValue: this.setFieldValue,
      registerField: this.registerField,
      setCallbacks: this.setCallbacks,
      setInitialValues: this.setInitialValues,
      submit: this.submit,
    };
  }
}

export interface FormInstance {
  getFieldValue: Function;
  getFieldsValue: Function;
  setFieldsValue: Function;
  setFieldValue: Function;
  registerField: Function;
  setCallbacks: Function;
  setInitialValues: Function;
  submit: Function;
}


export default function useForm(): [FormInstance] {
  const storeRef = useRef<FormStore>();
  if (!storeRef.current) {
    storeRef.current = new FormStore();
  }

  return [storeRef.current.getForm()];
}