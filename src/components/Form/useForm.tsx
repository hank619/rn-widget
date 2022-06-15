/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:34:59
 * @Description: 
 */
import { Component, useRef } from "react";
import type Field from './Field';
import Schema from 'async-validator';

class FormStore extends Component {

  fieldEntities: Field[];
  stores: any;
  callbacks: any;
  touched: any;
  errors: any;

  constructor(props?: any) {
    super(props);
    this.fieldEntities = [];
    this.stores = {};
    this.callbacks = {};
    this.touched = {};
    this.errors = {};
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
    this.touched[name] = true;
    const forceUpdateField = this.fieldEntities.find(field => field.name === name);
    if (!forceUpdateField) {
      return;
    }
    const validator = this.getValidator({
      [name]: forceUpdateField.rule,
    });
    validator.validate({ [name]: value})
      .then(() => {
        this.setFieldError(name, undefined);
        this.notifyUpdate([name]);
      })
      .catch(({_, fields}) => {
        this.setFieldError(name, fields[name])
      }); 
  }

  registerField = (field: Field) => {
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

  getFieldError = (name: string) => {
    return this.errors[name];
  }

  setFieldError = (name: string, fieldError: any) => {
    if (!fieldError) { 
      delete this.errors[name];
    } else {
      this.errors = {
        ...this.errors,
        [name]: fieldError,
      };
    }
    
    this.notifyUpdate([name])
  }

  setFieldsError = (fieldsError: any) => {
    this.errors = {
      ...fieldsError,
    };
    this.fieldEntities.forEach(field => {
      const name = field.name;
      this.touched[name] = true;
    });
    const errorFiledsNames = Object.keys(fieldsError); 
    this.notifyUpdate(errorFiledsNames);
  }

  notifyUpdate = (names: string[]) => {
    this.fieldEntities.forEach(field => {
      if (names.includes(field.name)) {
        field.onStoreChange();
      }
    });
  }

  getValidator = (descriptor: any) => {
    return new Schema(descriptor);
  }

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    const validator = this.getValidator(
      this.fieldEntities.reduce((descriptor: any, field: Field) => {
        if (field.rule) {
          descriptor[field.name] = field.rule;
        }
        return descriptor;
      }, {})
    );
    validator.validate(this.stores)
      .then(() => {
        this.setFieldsError({});
        if (onFinish) {
          onFinish(this.stores);
        }
      })
      .catch(({errors, fields}) => {
        this.setFieldsError(fields);
        if (onFinishFailed) {
          onFinishFailed({
            errors,
            values: this.stores,
          });
        }
      });
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
      getFieldError: this.getFieldError,
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
  getFieldError: Function;
  submit: Function;
}


export default function useForm(): [FormInstance] {
  const storeRef = useRef<FormStore>();
  if (!storeRef.current) {
    storeRef.current = new FormStore();
  }

  return [storeRef.current.getForm()];
}