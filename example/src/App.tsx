/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 14:36:53
 * @Description:
 */
import { Alert, Amount, Button, DatePicker, Email, 
  Input, Phone, Preview, Select, Status, TextArea, Upload, 
  Fold, Dialog, Checkbox, RadioGroup, Card, Loading, Step
} from 'rn-widget';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import type { Asset } from 'react-native-image-picker';
import SimpleToast from 'react-native-simple-toast';
import styles from './style';

export default function App() {
  const [input, setInput] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [, setDate] = React.useState<Date>();
  const [showDialog, setShowDialog] = React.useState(false);
  const previewFiles = [
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181724.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181749.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181828.png'
  ]

  const items = [
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ];
  const [checkedValue, setCheckedValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('');
  const [province, setProvince] = React.useState('');

  const allProvinceOptions = [
    { label: 'Johor', value: 'Johor' },
    { label: 'Kedah', value: 'Kedah' },
    { label: 'Kelantan', value: 'Kelantan' },
    { label: 'Kuala Lumpur', value: 'Kuala Lumpur' },
    { label: 'Labuan', value: 'Labuan' },
    { label: 'Melaka', value: 'Melaka' },
    { label: 'Negeri Sembilan', value: 'Negeri Sembilan' },
    { label: 'Pahang', value: 'Pahang' },
    { label: 'Penang', value: 'Penang' },
    { label: 'Perak', value: 'Perak' },
    { label: 'Perlis', value: 'Perlis' },
    { label: 'Putrajaya', value: 'Putrajaya' },
    { label: 'Sabah', value: 'Sabah' },
    { label: 'Sarawak', value: 'Sarawak' },
    { label: 'Selangor', value: 'Selangor' },
    { label: 'Terengganu', value: 'Terengganu' },
  ];

  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
        
        <Input
          style={{ width: 300 }}
          label={'Input'}
          prefix={'THB'}
          error={'invalid input'}
          value={input}
          onChange={(text) => setInput(text)}
          placeholder={'Input text'}
          description={<Text>test</Text>}
        />
        <Amount
          style={{ width: 300 }}
          currency={'MR'}
          label={'Amount'}
          error={'invalid amount'}
          value={amount}
          onChange={(text) => setAmount(text)}
        />
        <Phone
          style={{ width: 300 }}
          countryCode={'+86'}
          label={'Phone'}
          error={'invalid phone number'}
          value={phone}
          onChange={(text) => setPhone(text)}
        />
        <Email
          style={{ width: 300 }}
          label={'Email'}
          error={'invalid email address'}
          value={email}
          onChange={(text) => setEmail(text)}
          placeholder={'placeholder@example.com'}
        />
        <TextArea
          style={{ width: 300 }}
          label={'TextArea'}
          error={'invalid text'}
          value={textArea}
          placeholder={'Input text'}
          onChange={(text) => setTextArea(text)}
        />
        <DatePicker
          label={'Date'}
          style={{ width: 300 }}
          onChange={d => {
            setDate(d);
          }}
          maximumDate={new Date()}
        />
        <Button 
          text={'Base Button'}
          containerStyle={{ width: 300, height: 50, borderwidth: 1, borederColor: '#ccc', backgroundColor: '#f00', borderRadius: 20 }}
          textStyle={{ color: '#fff' }}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300 }}
          text={'Submit'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300 }}
          text={'Submit'}
          type={'secondary'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300 }}
          text={'Submit'}
          disabled
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginVertical: 12 }}
          text={'Submit'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginVertical: 12 }}
          text={'Submit'}
          type={'secondary'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginVertical: 12 }}
          text={'Submit'}
          disabled
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Status 
          type={'success'}
          status={'SUCCESS STATUS'}
        />
        <Status 
          type={'info'}
          status={'PROCESS STATUS'}
        />
        <Status 
          type={'error'}
          status={'ERROR STATUS'}
        />
        <Status 
          type={'warning'}
          status={'PENDING STATUS'}
        />
        <Status 
          type={'invalid'}
          status={'ENDING STATUS'}
        />
        <Upload
          label={'Upload Success'}
          style={{ width: 300 }}
          maxNumber={10}
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
        <Upload
          label={'Upload Fail'}
          style={{ width: 300 }}
          maxNumber={10}
          includeBase64
          uploadMethod={(_, uuid) => {
            return new Promise((_, reject) => {
              setTimeout(() => {
                reject({
                  error: 'failure',
                  uuid
                });
              }, 5000);
            });
          }}
        />
        <Preview 
          files={previewFiles}
        />
        <Select
          style={{ width: 300 }}
          value={province}
          onChange={setProvince}
          items={allProvinceOptions}
          label={'Province'}
        />
        <Alert
          style={{ width: 300 }}
          type={'success'}
          text={'Success Alert Success Alert Success Alert Success Alert Success Alert Success Alert '}
        />
        <Alert
          style={{ width: 300 }}
          type={'info'}
          text={'Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert '}
        />
        <Alert
          style={{ width: 300 }}
          type={'error'}
          text={'Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert '}
        />
        <Alert
          style={{ width: 300 }}
          type={'warning'}
          text={'Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert '}
        />
        <Fold
          style={{ width: 300 }}
          title={'How can I generate a policy after I purchased crack screen protection？'}
          content={'Click the [Redeem] on home page and enter the code we sent to you through SMS and email. Policy will be generated after you entered all the codes you want to add for this policy and click [Apply] button. Once policy is generated, the max coverage and excess is determined and cannot be changed any more, and the policy will start from the code purchased date after your activation is passed.'}
        />
        <Button.FWButton
          style={{ width: 300 }}
          text={'Show Dialog'}
          type={'primary'}
          onClick={() => setShowDialog(true)}
        />
        <Dialog
          visible={showDialog}
          dismiss={() => setShowDialog(false)}
          title={'Before We Start'}
          content={'If you have more than one code, you can add them together (up to 5) to generate this policy with new max coverage and excess. Each code can only be used for add on within 14 days of purchase.'}
          okText={'OK'}
          onOk={() => SimpleToast.show('OK')}
          cancelText={'Cancel'}
          onCancel={() => SimpleToast.show('Cancel')}
        />
        <Checkbox
          style={{ width: 300}}
          value={checkedValue}
          onChange={setCheckedValue}
          content={'I have read and agree to Policy Terms & Conditions. '}
        />
        <RadioGroup
          style={{ width: 300 }}
          value={radioValue}
          onChange={(_, v) => {
            setRadioValue(v);
          }}
          options={items}
        />
        <Card 
          title={'Location Selection'}
        >
          <Card.Item label={'Province'} value={'Special Capital Region of Jakarta'}/>
          <Card.Item label={'City'} value={'Central Jakarta'}/>
          <Card.Item label={'Address'} value={'Sichuan Chengdu Tainfu Square G building 3 floor 3 number 108'}/>
          <Card.Item label={'Photo'} value={
            <Preview 
              files={previewFiles}
            />
          }/>
        </Card>
        <Loading visible={false} size='large'/>
        <Step.FWStep
          containerStyle={{width: 300, marginTop: 30}}
          total={3}
          current={2}
        />
        <Step.CWStep
          containerStyle={{width: 300, marginTop: 30}}
          itemStyle={{width: 50}}
          total={3}
          current={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function getUrlFromAsset(asset: Asset) {
  return `data:image/png;base64,${asset.base64}`;
}
