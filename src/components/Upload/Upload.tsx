/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-15 18:01:12
 * @Description: 
 */
import React, { useEffect, useState } from 'react';
import {
  Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import { Asset, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { Images } from '../../theme';
import { getTimeBasedUUID } from '../../util/time';
import styles from './style';
import UploadContext from './UploadConext';
import UploadItem, { Item } from './UploadItem';
import { Toast } from '../Toast';


export type UploadInstance = {
  remove: Function,
  preview: Function,
  refresh: Function,
}

/**
 * Upload can not accept value props because there is inner status of pics like file size, upload status, etc.
 * @param props 
 * @returns 
 */
export default function Upload(props: UploadProps) {
  const { 
    maxNumber = 1, 
    status,
    onChange, 
    uploadMethod, 
    uploadText, 
    style, 
    includeBase64 = false,
    textStyle,
    fileNameStyle,
    fileSizeStyle,
  } = props;
  const [pics, setPics] = useState<Item[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [touched, setTouched] = useState(false);
  const [previewItem, setPreviewItem] = useState<Item|null>();

  async function pick() {
    setTouched(true);
    if (!!maxNumber && maxNumber <= pics.length) {
      Toast.show(
        `Can only upload at most ${maxNumber} pictures`);
      return;
    }
    try {
      const res: ImagePickerResponse = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: includeBase64,
      });
      if (!res.errorMessage) {
        upload(res);
      } else {
        throw new Error(res.errorMessage);
      }
    } catch (e: any) {
      Toast.show(e.message);
    }
  }

  async function upload(res: ImagePickerResponse) {
    const asset = res.assets?.[0];
    if (!asset) return;
    const uuid = getTimeBasedUUID();
    const newlyAddedPic: Item = { 
      name: asset?.fileName||'', 
      size: asset?.fileSize||0,
      url: '',
      status: 'loading',
      uuid,
    };
    setPics((old) => ([...old, newlyAddedPic]));
    uploadImpl(asset, uuid);
  }

  function uploadImpl(asset: Asset, uuid: string) {
    uploadMethod(asset, uuid)
      .then(({url, uuid: innerUUID}) => {
        setPics((old) => {
          const matched = old.find(item => item.uuid === innerUUID);
          // there is a case that when user is uploading, he/she delete the item, the matched will be null;
          if (matched) {
            matched.url = url;
            matched.status = 'success';
          }
          // should be new object referrence so that setState will work
          return [...old];
        });
      })
      .catch(({error, uuid: innerUUID}) => {
        setPics((old) => {
          const matched = old.find(item => item.uuid === innerUUID);
          if (matched) {
            matched.status = 'fail';
            matched.asset = asset;
          }
          return [...old];
        });
        console.log(error);
      });
  }

  function preview(index: number) {
    setShowPreview(true);
    setPreviewItem(pics[index]);
  }

  function dismiss() {
    setShowPreview(false);
    setPreviewItem(null);
  }

  function refresh(index: number) {
    const item = pics[index];
    // should updat the loading status first, then do uploadImpl
    setPics((old) => {
      const matched = pics[index];
      matched.status = 'loading';
      return [...old];
    });
    uploadImpl(item.asset!, item.uuid);
  }

  function remove(index: number) {
    pics.splice(index, 1);
    setPics([...pics]);
  }

  useEffect(() => {
    if (onChange && touched) {
      /**
       * Can not filtered pics here to return success pics only, it will cause infinity loop. The flow is like this:
       *  1. everytime it filter, it will generate a new array
       *  2. new array will return to host app by onChange
       *  3. host app setState, then it will trigger host app to re-render
       *  4. host re-render will trigger Upload widget to re-render
       *  5. useEffect of Upload widget will get invoked again
       *  6. new filtered array is generated, it return to the beginning of step 1
       */
      onChange(pics);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pics]);

  return (
    <UploadContext.Provider
      value={{
        remove,
        preview,
        refresh,
      }}
    >
      <View style={[styles.widgetContainer, style]}>
        <TouchableOpacity onPress={pick}>
          <View style={[
            styles.uploadContainer,
            // @ts-ignore
            status && status !== 'success' && styles[status],
          ]}>
            <Image source={Images.upload} style={styles.uploadImage} />
            <Text style={[styles.uploadText, textStyle]}>
              {uploadText || 'Upload a photo'}
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          {pics.map((item, index) => (
            <UploadItem {...item} index={index} key={index} fileNameStyle={fileNameStyle} fileSizeStyle={fileSizeStyle}/>
          ))}
        </View>
        {showPreview && (
          <Modal 
            visible 
            transparent
          >
            <TouchableWithoutFeedback
              onPress={dismiss}
            >
              <View style={styles.modalContainer}>
                {/* TouchableWithoutFeedback without implementation of onPress is in order to ignore click event on image*/}
                <TouchableWithoutFeedback>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.modalImage}
                      source={{ uri: previewItem?.url}}
                      resizeMode="contain"
                    />
                    <TouchableOpacity
                      onPress={dismiss}
                      style={styles.modalClose}
                      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                    >
                      <Image
                        source={Images.close}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </View>
    </UploadContext.Provider>
  );
}

export interface UploadProps {
  style?: any;
  status?: 'loading' | 'success' | 'fail';
  maxNumber?: number;
  onChange?: (pics: any[]) => void;
  uploadMethod: (asset: Asset ,uuid: string) => Promise<any>;
  uploadText?: any;
  textStyle?: any;
  // in most case, doesn't use this prop, it's mainly usage is to do local demo, file uri is recommended than this.
  includeBase64?: boolean;
  fileNameStyle?: any;
  fileSizeStyle?: any;
}