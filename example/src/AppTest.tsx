/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import React from 'react';
import { Text } from 'react-native';
import { Button, Field, Form, Input, TextArea } from 'rn-widget';

export default function AppTest() {
  return (
    <Form
      onFinish={(values: any) => {
        console.log(values);
      }}
      initialValues={{
        input: '123',
      }}
    >
      <Text>test</Text>
      <Field name="input" rule={{type: 'string', required: true}}>
        {/* <TextInput style={{backgroundColor: '#eeeeee', margin: 30, height: 100}} /> */}
        <Input />
      </Field>
      <Field name='textarea' rule={{type: 'string', required: true}}>
        <TextArea />
      </Field>
      <Text>test</Text>
      <Button.FWButton text='click' action='submit'/>
    </Form>
  )
}