/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import React from 'react';
import { TextInput, Text  } from 'react-native';
import { Field, Form, Button } from 'rn-widget';

export default function AppTest() {
  return (
    <Form
      onFinish={(values: any) => {
        console.log(values);
      }}
    >
      <Text>test</Text>
      <Field name="input" onChangePropsName='onChangeText' rule={{type: 'string', required: true}}>
        <TextInput style={{backgroundColor: '#ff0000', margin: 30, height: 100}} />
      </Field>
      <Text>test</Text>
      <Button.FWButton text='click' action='submit'/>
    </Form>
  )
}