/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 14:36:53
 * @Description:
 */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { Alert, Button, Card, Dialog, Fold, Loading, Preview, Status, Step } from 'rn-widget';
import styles from './style';

export default function DisplayWidgetScreen() {
  const [showDialog, setShowDialog] = React.useState(false);
  const previewFiles = [
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181724.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181749.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181828.png'
  ]

  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.displayWidgetContainer}>
        
        <Button 
          text={'Base Button'}
          containerStyle={{ width: 300, height: 50, borderwidth: 1, borederColor: '#ccc', backgroundColor: '#f00', borderRadius: 20, marginTop: 12, }}
          textStyle={{ color: '#fff' }}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300, marginTop: 12  }}
          text={'Submit'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300, marginTop: 12  }}
          text={'Submit'}
          type={'secondary'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.FWButton
          style={{ width: 300, marginTop: 12  }}
          text={'Submit'}
          disabled
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginTop: 12 }}
          text={'Submit'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginTop: 12 }}
          text={'Submit'}
          type={'secondary'}
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Button.CWButton
          style={{ marginHorizontal: 32, marginTop: 12 }}
          text={'Submit'}
          disabled
          onClick={() => {SimpleToast.show('Submit')}}
        />
        <Status 
          type={'success'}
          status={'SUCCESS STATUS'}
          style={{ marginTop: 12, }}
        />
        <Status 
          type={'info'}
          status={'PROCESS STATUS'}
          style={{ marginTop: 12 }}
        />
        <Status 
          type={'error'}
          status={'ERROR STATUS'}
          style={{ marginTop: 12 }}
        />
        <Status 
          type={'warning'}
          status={'PENDING STATUS'}
          style={{ marginTop: 12 }}
        />
        <Status 
          type={'invalid'}
          status={'ENDING STATUS'}
          style={{ marginTop: 12 }}
        />
        <Preview 
          files={previewFiles}
          style={{ marginVertical: 400 }}
        />
        <Alert
          style={{ width: 300, marginTop: 12 }}
          type={'success'}
          text={'Success Alert Success Alert Success Alert Success Alert Success Alert Success Alert '}
        />
        <Alert
          style={{ width: 300 , marginTop: 12}}
          type={'info'}
          text={'Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert '}
        />
        <Alert
          style={{ width: 300, marginTop: 12 }}
          type={'error'}
          text={'Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert '}
        />
        <Alert
          style={{ width: 300, marginTop: 12}}
          type={'warning'}
          text={'Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert '}
        />
        <Fold
          style={{ width: 300, marginVertical: 400}}
          title={'How can I generate a policy after I purchased crack screen protection？'}
          content={'Click the [Redeem] on home page and enter the code we sent to you through SMS and email. Policy will be generated after you entered all the codes you want to add for this policy and click [Apply] button. Once policy is generated, the max coverage and excess is determined and cannot be changed any more, and the policy will start from the code purchased date after your activation is passed.'}
        />
        <Button.FWButton
          style={{ width: 300, marginVertica: 400}}
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
        <Card 
          title={'Location Selection'}
          style={{marginTop: 300}}
        >
          <Card.Item label={'Province'} value={'Special Capital Region of Jakarta'}/>
          <Card.Item label={'City'} value={'Central Jakarta'}/>
          <Card.Item label={'Address'} value={'Sichuan Chengdu Tainfu Square G building 3 floor 3 number 108'}/>
        </Card>
        <Loading visible={false} size='large'/>
        <Step.FWStep
          containerStyle={{width: 300, marginTop: 100}}
          total={3}
          current={2}
        />
        <Step.CWStep
          containerStyle={{width: 300, marginTop: 24, marginBottom: 100}}
          itemStyle={{width: 50}}
          total={3}
          current={2}
        />
      </ScrollView>

    </SafeAreaView>
  );
}
