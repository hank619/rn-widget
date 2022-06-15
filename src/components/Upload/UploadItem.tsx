/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-15 18:01:03
 * @Description: 
 */
import filesize from 'filesize';
import React, { useContext } from 'react';
import {
  ActivityIndicator, Image, Text, TouchableOpacity, View
} from 'react-native';
import type { Asset } from 'react-native-image-picker';
import { Colors, Images } from '../../theme';
import styles from './style';
import type { UploadInstance } from './Upload';
import UploadContext from './UploadConext';

export type Item = {
  name: string;
  size: number;
  url: string;
  status: 'loading' | 'success' | 'fail' | 'init';
  uuid: string;
  asset?: Asset;
  fileNameStyle?: any;
  fileSizeStyle?: any;
}

export default function UploadItem(props: Item & {index: number}) {
  const { name, size, status, index, fileNameStyle, fileSizeStyle } = props;
  const { remove, preview, refresh } = useContext<UploadInstance|null>(UploadContext) || {};

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
          <TouchableOpacity onPress={() => preview && preview(index)}>
            <Image source={Images.preview} style={styles.itemPreview} />
          </TouchableOpacity>
        )}
        {status === 'fail' && (
          <TouchableOpacity onPress={() => refresh && refresh(index)}>
            <Image source={Images.refresh} style={styles.itemRefresh} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => remove && remove(index)}>
          <Image source={Images.delete} style={styles.itemRemove} />
        </TouchableOpacity>
      </View>
      {status === 'fail' && <View style={styles.itemError}/>}
    </View>
  );
}