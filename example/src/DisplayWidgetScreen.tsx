/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 14:36:53
 * @Description:
 */
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { Alert, Button, Card, Dialog, Fold, Loading, Preview, Status, Steps, BottomSlide } from 'rn-widget';
import styles from './style';

export default function DisplayWidgetScreen() {
  const [showDialog, setShowDialog] = useState(false);
  const [showBottomSlide, setShowBottomSlide] = React.useState(false);
  const previewFiles = [
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181724.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181749.png',
    'https://raw.githubusercontent.com/matrixyf/pictureRepo/main/20211202181828.png'
  ];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.displayWidgetContainer}>
        <Button
          type='primary'
          style={{ marginTop: 20 }}
          onPress={() => { SimpleToast.show('Submit'); }}
        >
          Primary Button
        </Button>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => { SimpleToast.show('Submit'); }}
        >
          Default Button
        </Button>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => { SimpleToast.show('Submit'); }}
          type='ghost'
        >
          Ghost Button
        </Button>
        <Button
          style={{ marginTop: 20 }}
          type='primary'
          disabled
          onPress={() => { SimpleToast.show('Submit'); }}
        >
          Primary Disabled
        </Button>
        <Button
          style={{ marginTop: 20 }}
          disabled
          onPress={() => { SimpleToast.show('Submit'); }}
        >
          Default Disabled
        </Button>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => { SimpleToast.show('Submit'); }}
          disabled
          type='ghost'
        >
          Ghost Disabled
        </Button>
        <Status
          type={'success'}
          status={'SUCCESS STATUS'}
          style={{ marginTop: 20, }}
        />
        <Status
          type={'info'}
          status={'PROCESS STATUS'}
          style={{ marginTop: 20 }}
        />
        <Status
          type={'error'}
          status={'ERROR STATUS'}
          style={{ marginTop: 20 }}
        />
        <Status
          type={'warning'}
          status={'PENDING STATUS'}
          style={{ marginTop: 20 }}
        />
        <Status
          type={'invalid'}
          status={'ENDING STATUS'}
          style={{ marginTop: 20 }}
        />
        <Preview
          files={previewFiles}
          style={{ marginVertical: 20 }}
        />
        <Alert
          style={{ width: 300, marginTop: 20 }}
          type={'success'}
          text={'Success Alert Success Alert Success Alert Success Alert Success Alert Success Alert '}
        />
        <Alert
          style={{ width: 300, marginTop: 20 }}
          type={'info'}
          text={'Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert Info Alert '}
        />
        <Alert
          style={{ width: 300, marginTop: 20 }}
          type={'error'}
          text={'Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert Error Alert '}
        />
        <Alert
          style={{ width: 300, marginTop: 20 }}
          type={'warning'}
          text={'Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert Warning Alert '}
        />
        <Fold
          style={{ width: 300, marginVertical: 20 }}
          title={'How can I generate a policy after I purchased crack screen protection？'}
          content={'Click the [Redeem] on home page and enter the code we sent to you through SMS and email. Policy will be generated after you entered all the codes you want to add for this policy and click [Apply] button. Once policy is generated, the max coverage and excess is determined and cannot be changed any more, and the policy will start from the code purchased date after your activation is passed.'}
        />
        <Button
          style={{ width: 300, marginVertical: 20 }}
          type={'primary'}
          onPress={() => setShowDialog(true)}
        >
          Show Dialog
        </Button>
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
        <Button
          style={{ width: 300, marginVertical: 20 }}
          type={'primary'}
          onPress={() => setShowBottomSlide(true)}
        >
          Show Bottom Slide
        </Button>
        <BottomSlide
          visible={showBottomSlide}
          dismiss={() => setShowBottomSlide(false)}
          maxHeight={200}
        >
          <Text>
            content...
          </Text>
        </BottomSlide>
        <Card
          title={'Location Selection'}
          style={{ marginTop: 20 }}
        >
          <Card.Item label={'Province'} value={'Special Capital Region of Jakarta'} />
          <Card.Item label={'City'} value={'Central Jakarta'} />
          <Card.Item label={'Address'} value={'Sichuan Chengdu Tainfu Square G building 3 floor 3 number 108'} />
        </Card>
        {/* <Loading /> */}
        <View style={{ backgroundColor: '#5858FF', padding: 24, marginTop: 20, width: '100%' }}>
          <Steps
            total={3}
            current={2}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
