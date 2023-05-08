/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 16:16:45
 * @Description: 
 */
import moment from 'moment';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Button, Checkbox, DatePicker, Field, Form, Input, RadioGroup, Select, TabBar, TextArea, Upload, useForm } from 'rn-widget';
import styles from './style';
import { Images } from './Images';

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
          onFinishFailed={({ errors, values }: { errors: any, values: any; }) => {
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
          <Field style={{ marginTop: 20 }} label="Input" name="input" rule={{ type: 'string', required: true }}>
            <Input />
          </Field>
          <Field style={{ marginTop: 20 }} label="BankCard" name="bankCard" rule={{ type: 'string', required: true }}>
            <Input.BankCard />
          </Field>
          <Field style={{ marginTop: 20 }} label="Phone" name="phone" rule={{ type: 'string', required: true }}>
            <Input.Phone prefix='84' />
          </Field>
          <Field style={{ marginTop: 20 }} label="Password" name="password" rule={{ type: 'string', required: true }}>
            <Input.Password />
          </Field>
          <Field style={{ marginTop: 20 }} label="Number" name="number" rule={{ type: 'string', required: true }}>
            <Input.Number />
          </Field>
          <Field style={{ marginTop: 20 }} label="Amount" name="amount" rule={{ type: 'string', required: true }}>
            <Input.Amount />
          </Field>
          <Field style={{ marginTop: 20 }} label="TextArea" name='textarea' rule={{ type: 'string', required: true }}>
            <TextArea />
          </Field>
          <Field style={{ marginTop: 20 }} label="DatePicker" name='datepicker' rule={{ required: true }}>
            <DatePicker />
          </Field>
          <Field style={{ marginTop: 20 }} label="Checkbox" name='checkbox' rule={{
            validator: (_, value: any) => {
              return !!value;
            }
          }}>
            <Checkbox>
                please check me
                <TouchableOpacity onPress={() => console.log('Click')}>
                  <Text>
                    Click
                  </Text>
                </TouchableOpacity>
            </Checkbox>
          </Field>
          <Field style={{ marginTop: 20 }} label="RadioGroup" name='radiogroup' rule={{ type: 'string', required: true }}>
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
          <Field style={{ marginTop: 20 }} label="Select" name='select' rule={{ type: 'string', required: true }}>
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
            style={{ marginTop: 10 }}
            label="Select2"
            name="city"
            dependencies={['select']}
            rule={{ type: 'string', required: true }}
          >
            <Select
              options={() => {
                const select = form.getFieldValue('select');
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
                  ];
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
          <Field style={{ marginTop: 20 }} label="UploadSuccess" name='uploadSuccess' rule={{
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
                  }, 200);
                });
              }}
            />
          </Field>
          <Field style={{ marginTop: 20 }} label="UploadFailed" name='uploadFailed' rule={{
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
                  }, 200);
                });
              }}
            />
          </Field>
          <Field style={{ marginTop: 20 }} label="TabBar" name='tabBar'>
            <TabBar
              tabs={[
                {
                  title: 'Home',
                  icon: Images.icHome,
                  selectedIcon: Images.icHomeSelected,
                },
                {
                  title: 'Policy',
                  icon: Images.icPolicy,
                  selectedIcon: Images.icPolicySelected,
                  badge: 3,
                },
                {
                  title: 'Me',
                  icon: Images.icMe,
                  selectedIcon: Images.icMeSelected,
                },
              ]}
            />
          </Field>
          <Button action='submit' style={{ marginTop: 30 }}>click</Button>
        </Form>
      </ScrollView>
    </SafeAreaView>

  );
}

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}