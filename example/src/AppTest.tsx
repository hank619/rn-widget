/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import React from 'react';
import { TextInput, Text  } from 'react-native';
import { Field, Form } from 'rn-widget';

export default function AppTest() {
  return (
    <Form
      onFinish={(values: any) => {
        console.log(values);
      }}
    >
      <Text>test</Text>
      <Field name="input">
        <TextInput style={{backgroundColor: '#ff0000', margin: 30, height: 100}} />
      </Field>
      <Text>test</Text>

    </Form>
  )
}