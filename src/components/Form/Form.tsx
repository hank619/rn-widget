/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:07
 * @Description: 
 */
import React, { useRef } from "react";
import { View } from "react-native";
import FiledContext from "./FieldContext";
import useForm from "./useForm";

export default function Form(props: FormProps) {
  const { initialValues, onFinish, children } = props;
  
  const [formInstance] = useForm();
  const mountedRef = useRef(false);

  if (!mountedRef.current) {
    formInstance.setCallbacks({
      onFinish,
    });
    if (initialValues) {
      formInstance.setInitialValues(initialValues);
    }
    mountedRef.current = true;
  }

  return (
    <View>
      <FiledContext.Provider value={formInstance}>
        {children}
      </FiledContext.Provider>
    </View>
  );
}

interface FormProps {
  initialValues?: any,
  onFinish: Function;
  children?: React.ReactNode;
}