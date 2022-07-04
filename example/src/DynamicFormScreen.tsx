/*
 * @Author: Hong.Zhang
 * @Date: 2022-07-04 14:48:39
 * @Description: 
 */
import moment from 'moment';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Form, useForm } from 'rn-widget';
import type { ElementProps } from 'src/components/Form/Element';
import styles from './style';

export default function DynamicFormScreen() {

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
          config={dynamicForm(form)}
        />
      </ScrollView>
    </SafeAreaView>
    
  );
}

const dynamicForm = (form: any): ElementProps[] => ([
  {
    type: 'Input',
    label: 'Input',
    name: 'input',
    rule: { required: true, type: 'string'},
  },
  {
    type: 'Amount',
    label: 'Amount',
    name: 'amount',
    rule: {type: 'string', required: true},
  },
  {
    type: 'TextArea',
    label: 'TextArea',
    name: 'textarea',
    rule: {type: 'string', required: true},
  },
  {
    type: 'DatePicker',
    label: 'DatePicker',
    name: 'datepicker',
    rule: {required: true},
  },
  {
    type: 'Checkbox',
    label: 'Checkbox',
    name: 'checkbox',
    rule: {required: true},
  },
  {
    type: 'RadioGroup',
    label: 'RadioGroup',
    name: 'radiogroup',
    rule: {type: 'string', required: true},
    options: [
      {
        label: 'option 1',
        value: 'option 1',
      },
      {
        label: 'option 2',
        value: 'option 2',
      }
    ]
  },
  {
    type: 'Select',
    label: 'Select',
    name: 'select',
    rule: {type: 'string', required: true},
    options: [
      {
        label: 'option 1',
        value: 'option 1',
      },
      {
        label: 'option 2',
        value: 'option 2',
      }
    ],
  },
  {
    type: 'Select',
    label: 'Select2',
    name: 'city',
    dependencies: ['select'],
    rule: {type: 'string', required: true},
    options: () => {
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
      ]
    }
  },
  {
    type: 'Upload',
    label: 'Upload Success',
    name: 'uploadSuccess',
    rule: {
      validator: (_, value: any) => {
        return !!value && value.length > 0 && !value.find((item: any) => item.status === 'fail');
      }
    },
    includeBase64: true,
    uploadMethod: (asset, uuid) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            url: getUrlFromAsset(asset),
            uuid
          });
        }, 1000);
      });
    }
  },
  {
    type: 'Upload',
    label: 'Upload Failed',
    name: 'uploadFailed',
    rule: {
      validator: (_, value: any) => {
        return !!value && value.length > 0 && !value.find((item: any) => item.status === 'fail');
      }
    },
    includeBase64: true,
    uploadMethod: (_, uuid) => {
      return new Promise((__, reject) => {
        setTimeout(() => {
          reject({
            error: 'failure',
            uuid
          });
        }, 1000);
      });
    }
  }
])

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}