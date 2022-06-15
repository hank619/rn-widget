/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import React from 'react';
import { Text } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Amount, Button, Checkbox, Field, Form, Input, RadioGroup, TextArea, Upload } from 'rn-widget';

export default function AppTest() {
  return (
    <Form
      onFinish={(values: any) => {
        console.log(values);
      }}
      initialValues={{
        input: '123',
        amount: '12313',
        checkbox: true,
        radiogroup: 'option 2',
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
      <Field name='amount' rule={{type: 'string', required: true}}>
        <Amount  currency='PHP' />
      </Field>
      <Field name='checkbox' rule={{
        validator: (_, value: any) => {
          return !!value;
        }
      }}>
        <Checkbox content='plse check me' />
      </Field>
      <Field name='radiogroup' rule={{type: 'string', required: true}}>
        <RadioGroup 
          options={[
            {
              label: 'option 1',
              value: 'option 1',
            },
            {
              label: 'option 2',
              value: 'option 2',
            }
          ]}
        />
      </Field>
      <Field name='upload' rule={{
        validator: (_, value: any) => {
          return !!value && value.length > 0 && !value.find((item: any) => item.status === 'fail');
        }
      }}>
        <Upload 
          includeBase64
          uploadMethod={(asset, uuid) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({
                  url: getUrlFromAsset(asset),
                  uuid
                });
                // reject({
                //   error: 'failure',
                //   uuid
                // });
              }, 1000);
            });
          }}
        />
      </Field>
      <Text>test</Text>
      <Button.FWButton text='click' action='submit'/>
    </Form>
  )
}

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}