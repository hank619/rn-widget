/*
 * @Author: Hong.Zhang
 * @Date: 2023-05-04 10:19:26
 * @Description: 
 */
import React, { useState } from 'react';
import { Modal, SafeAreaView, Text, View, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Button } from '../Button';
import { Images } from '../../theme';

export interface IPreviewProps {
  files: string[];
  style?: object;
}

export default function Preview(props: IPreviewProps) {
  const { files, style, ...rest } = props;
  const mappedFiles = files.map(item => ({ url: item }));
  const [showPreview, setShowPreview] = useState(false);
  return (
    <View style={[style]}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text>
          {`${files.length} ${files.length > 1 ? `files` : 'file'} attached`}
        </Text>
        <Button
          type='link'
          onPress={() => setShowPreview(true)}
        >
          <Image source={Images.attachment} />
        </Button>
      </View>
      <Modal visible={showPreview}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "transparent"}}>
          <ImageViewer 
            imageUrls={mappedFiles}
            onCancel={() => setShowPreview(false)}
            enableSwipeDown
            saveToLocalByLongPress={false}
            {...rest} 
          />
        </SafeAreaView>
      </Modal>
    </View>

  );
}