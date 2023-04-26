/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import moment from 'moment';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Amount, Button, Checkbox, DatePicker, Field, Form, Input, RadioGroup, Select, TextArea, Upload, useForm } from 'rn-widget';
import styles from './style';

export default function ActionWidgetScreen() {

  const [form] = useForm();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.actionWidgtContainer}
      >
        <Form
          form={form}
          onFinish={(values: any) => {
            console.log(`values = `, values);
          }}
          onFinishFailed={({errors, values}: {errors: any, values: any}) => {
            console.log(`errors = `, errors);
            console.log(`values = `, values);
          }}
          initialValues={{
            amount: '12313',
            checkbox: true,
            radiogroup: 'option 1',
            // select: 'option 2',
            datepicker: moment(),
          }}
        >
          <Field style={{marginTop: 400}} label="Input" name="input" rule={{type: 'string', required: true}}>
            <Input />
          </Field>
          <Field style={{marginTop: 400}} label="Amount" name='amount' rule={{type: 'string', required: true}}>
            <Amount  currency='PHP' />
          </Field>
          <Field style={{marginTop: 400}} label="TextArea" name='textarea' rule={{type: 'string', required: true}}>
            <TextArea showCount />
          </Field>
          <Field style={{marginTop: 400}} label="DatePicker"  name='datepicker' rule={{ required: true}}>
            <DatePicker />
          </Field>
          <Field style={{marginTop: 400}} label="Checkbox" name='checkbox' rule={{
            validator: (_, value: any) => {
              return !!value;
            }
          }}>
            <Checkbox content='plse check me' />
          </Field>
          <Field style={{marginTop: 400}} label="RadioGroup" name='radiogroup' rule={{type: 'string', required: true}}>
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
          <Field style={{marginTop: 400}} label="Select"  name='select' rule={{type: 'string', required: true}}>
            <Select 
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
          <Field 
            style={{marginTop: 10}} 
            label="Select2" 
            name="city" 
            dependencies={['select']}
            rule={{type: 'string', required: true}}
          >
            <Select 
              options={() => {
                const select =form.getFieldValue('select');
                if (select === 'option 1') {
                  return [
                    {
                      label: 'option 3',
                      value: 'option 3',
                    },
                    {
                      label: 'option 4',
                      value: 'option 4',
                    }
                  ]
                }
                return [
                  {
                    label: 'option 5',
                    value: 'option 5',
                  },
                  {
                    label: 'option 6',
                    value: 'option 6',
                  }
                ];
              }}
            />
          </Field>
          <Field style={{marginTop: 400}} label="UploadSuccess" name='uploadSuccess' rule={{
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
                  }, 1000);
                });
              }}
            />
          </Field>
          <Field style={{marginTop: 400}} label="UploadFailed" name='uploadFailed' rule={{
            validator: (_, value: any) => {
              return !!value && value.length > 0 && !value.find((item: any) => item.status === 'fail');
            }
          }}>
            <Upload 
              includeBase64
              uploadMethod={(_, uuid) => {
                return new Promise((__, reject) => {
                  setTimeout(() => {
                    reject({
                      error: 'failure',
                      uuid
                    });
                  }, 1000);
                });
              }}
            />
          </Field>
          <Button text='click' action='submit' style={{marginTop: 30}}/>
        </Form>
      </ScrollView>
    </SafeAreaView>
    
  )
}

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}