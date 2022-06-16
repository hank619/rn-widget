/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import moment from 'moment';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Amount, Button, Checkbox, DatePicker, Field, Form, Input, RadioGroup, Select, TextArea, Upload } from 'rn-widget';
import styles from './style';

export default function AppTest() {

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.actionWidgtContainer}
      >
        <Form
          onFinish={(values: any) => {
            console.log(values);
          }}
          initialValues={{
            input: '123',
            amount: '12313',
            checkbox: true,
            radiogroup: 'option 2',
            datepicker: moment(),
          }}
        >
          <Field label="Input" name="input" rule={{type: 'string', required: true}}>
            <Input />
          </Field>
          <Field label="Amount" name='amount' rule={{type: 'string', required: true}}>
            <Amount  currency='PHP' />
          </Field>
          <Field label="TextArea" name='textarea' rule={{type: 'string', required: true}}>
            <TextArea />
          </Field>
          <Field label="DatePicker"  name='datepicker' rule={{ required: true}}>
            <DatePicker />
          </Field>
          <Field label="Checkbox" name='checkbox' rule={{
            validator: (_, value: any) => {
              return !!value;
            }
          }}>
            <Checkbox content='plse check me' />
          </Field>
          <Field label="RadioGroup" name='radiogroup' rule={{type: 'string', required: true}}>
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
          <Field label="Select"  name='select' rule={{type: 'string', required: true}}>
            <Select 
              items={[
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
          <Field label="UploadSuccess" name='uploadSuccess' rule={{
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
          <Field label="UploadFailed" name='uploadFailed' rule={{
            validator: (_, value: any) => {
              return !!value && value.length > 0 && !value.find((item: any) => item.status === 'fail');
            }
          }}>
            <Upload 
              includeBase64
              uploadMethod={(_, uuid) => {
                return new Promise((_, reject) => {
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
          <Button.FWButton text='click' action='submit'/>
        </Form>
      </ScrollView>
    </SafeAreaView>
    
  )
}

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}