/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:07
 * @Description: 
 */
import React, { useRef } from "react";
import { View } from "react-native";
import FiledContext from "./FieldContext";
import useForm, { FormInstance } from "./useForm";

export default function Form(props: FormProps) {
  const { initialValues, onFinish, onFinishFailed, children, form } = props;
  
  const [formInstance] = useForm(form);
  const mountedRef = useRef(false);

  if (!mountedRef.current) {
    formInstance.setCallbacks({
      onFinish,
      onFinishFailed,
    });
    if (initialValues) {
      formInstance.setInitialValues(initialValues);
    }
    mountedRef.current = true;
  }
  
  // find the button which trigger submit;
  const mappedChildren = React.Children.map(children, (child) => {
    const transferredChild = child as any;
    if (transferredChild?.props?.action === 'submit') {
      return React.cloneElement(transferredChild, {
        onClick: () => {
          formInstance.submit();
        }
      });
    }
    return child;
  });

  return (
    <View>
      <FiledContext.Provider value={formInstance}>
        {mappedChildren}
      </FiledContext.Provider>
    </View>
  );
}

interface FormProps {
  initialValues?: any,
  onFinish?: Function;
  onFinishFailed?: Function;
  children?: React.ReactNode;
  form?: FormInstance;
}