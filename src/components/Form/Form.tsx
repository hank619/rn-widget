/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:07
 * @Description: 
 */
import React, { useRef } from "react";
import { View } from "react-native";
import { Button } from "../Button";
import type { ElementProps } from "./Element";
import Element from "./Element";
import FiledContext from "./FieldContext";
import useForm, { FormInstance } from "./useForm";

export default function Form(props: FormProps) {
  const { initialValues, onFinish, onFinishFailed, config, children, form } = props;

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

  let mappedChildren;
  if (config && config.length > 0) {
    // config usage
    const appendedButtonConfig = [
      ...config,
      {
        render: () => {
          return (
            <Button
              action='submit'
              style={{ marginTop: 30 }}
              onPress={() => {
                formInstance.submit();
              }}
            >
              Submit
            </Button>
          );
        }
      }
    ];
    mappedChildren = appendedButtonConfig.map(conf => {
      return <Element {...conf} />;
    });
  } else {
    // childrend usage
    // find the button which trigger submit;
    mappedChildren = React.Children.map(children, (child) => {
      const transferredChild = child as any;
      if (transferredChild?.props?.action === 'submit') {
        return React.cloneElement(transferredChild, {
          onPress: () => {
            formInstance.submit();
          }
        });
      }
      return child;
    });
  }

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
  // config and children are exclusive
  config?: ElementProps[];
  children?: React.ReactNode;
  form?: FormInstance;
}