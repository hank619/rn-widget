import React, { ReactNode, useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { launchImageLibrary, ImagePickerResponse, Asset} from 'react-native-image-picker';
import { Colors, Images } from '../../theme';
import SimpleToast from 'react-native-simple-toast';
import filesize from 'filesize';
import styles from './style';
import { getTimeBasedUUID } from '../../util/time';

type ContextValue = {
  remove: Function,
  preview: Function,
  refresh: Function,
}

const UploadContext = React.createContext<ContextValue>({remove: () => {}, preview: () => {}, refresh: () => {}});

export function Upload(props: UploadProps) {
  const { 
    maxNumber = 1, 
    onChange, 
    uploadMethod, 
    description, 
    uploadText, 
    label, 
    labelStyle, 
    style, 
    includeBase64 = false,
    textStyle,
    descriptionStyle,
    fileNameStyle,
    fileSizeStyle,
  } = props;
  const [pics, setPics] = useState<UploadItem[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState<UploadItem|null>();
  const isDescriptionString = typeof description === 'string';

  async function pick() {
    if (!!maxNumber && maxNumber <= pics.length) {
      SimpleToast.show(
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
      SimpleToast.show(e.message);
    }
  }

  async function upload(res: ImagePickerResponse) {
    const asset = res.assets?.[0];
    if (!asset) return;
    const uuid = getTimeBasedUUID();
    const newlyAddedPic: UploadItem = { 
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
    if (onChange) {
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
  }, [pics, onChange]);

  return (
    <UploadContext.Provider
      value={{
        remove,
        preview,
        refresh,
      }}
    >
      <View style={[styles.widgetContainer, style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <TouchableOpacity onPress={pick}>
          <View style={styles.uploadContainer}>
            <Image source={Images.upload} style={styles.uploadImage} />
            <Text style={[styles.uploadText, textStyle]}>
              {uploadText || 'Upload a photo'}
            </Text>
          </View>
        </TouchableOpacity>
        {description && isDescriptionString && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
        <>
          {description && !isDescriptionString && description}
        </>
        <View>
          {pics.map((item, index) => (
            <Item {...item} index={index} key={index} fileNameStyle={fileNameStyle} fileSizeStyle={fileSizeStyle}/>
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

function Item(props: UploadItem & {index: number}) {
  const { name, size, status, index, fileNameStyle, fileSizeStyle } = props;
  const { remove, preview, refresh } = useContext<ContextValue>(UploadContext);

  return (
    <View style={styles.itemWrapper}> 
      <View style={styles.itemContainer}>
        {status === 'loading' ? (
          <ActivityIndicator
            style={styles.itemImage}
            size="small"
            color={Colors.black}
          />
        ) : (
          <Image source={Images.jpgFile} style={styles.itemImage} />
        )}
        <Text style={[styles.itemName, fileNameStyle]} numberOfLines={1} ellipsizeMode={'middle'}>
          {name}
          <Text style={[styles.itemSize, fileSizeStyle]}>{` ${filesize(size)}`}</Text>
        </Text>
        {status === 'success' && (
          <TouchableOpacity onPress={() => preview(index)}>
            <Image source={Images.preview} style={styles.itemPreview} />
          </TouchableOpacity>
        )}
        {status === 'fail' && (
          <TouchableOpacity onPress={() => refresh(index)}>
            <Image source={Images.refresh} style={styles.itemRefresh} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => remove(index)}>
          <Image source={Images.delete} style={styles.itemRemove} />
        </TouchableOpacity>
      </View>
      {status === 'fail' && <View style={styles.itemError}/>}
    </View>
  );
}

export interface UploadProps {
  style?: any;
  labelStyle?: any;
  label?: string;
  maxNumber?: number;
  onChange?: (pics: any[]) => void;
  uploadMethod: (asset: Asset ,uuid: string) => Promise<any>;
  uploadText?: any;
  description?: string | ReactNode;
  // in most case, doesn't use this prop, it's mainly usage is to do local demo, file uri is recommended than this.
  includeBase64?: boolean;
  textStyle?: any;
  descriptionStyle?: any;
  fileNameStyle?: any;
  fileSizeStyle?: any;
}

interface UploadItem {
  name: string;
  size: number;
  url: string;
  status: 'loading' | 'success' | 'fail' | 'init';
  uuid: string;
  asset?: Asset;
  fileNameStyle?: any;
  fileSizeStyle?: any;
}

