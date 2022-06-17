/*
 * @Author: Hong.Zhang
 * @Date: 2021-06-18 13:19:40
 * @LastEditTime: 2022-06-15 19:08:51
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Colors, TypeFaces } from '../../theme';

export default StyleSheet.create({
  widgetContainer: {
    width: '100%',
  },
  uploadContainer: {
    width: '100%',
    height: 72,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 3,
    borderColor: '#BDBDBD',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
  },
  error: {
    borderColor: Colors.red,
  },
  warning: {
    borderColor: Colors.yellow,
  },
  uploadImage: {},
  uploadText: {
    marginLeft: 16,
    ...TypeFaces.body1,
    fontWeight: '500',
    color: Colors.black,
  },
  uploadLoadingContainer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrapper: {
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    height: 56,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: Colors.ice,
    paddingHorizontal: 12,
  },
  itemError: {
    height: 2,
    width: '100%',
    backgroundColor: Colors.red,
  },
  itemImage: {},
  itemName: {
    textAlignVertical: 'center',
    flex: 1,
    marginLeft: 8,
    ...TypeFaces.body1,
    color: Colors.black,
  },
  itemSize: {
    ...TypeFaces.body1,
    color: Colors.stone,
  },
  itemPreview: {
    marginLeft: 8,
  },
  itemRefresh: {
    marginLeft: 8,
  },
  itemRemove: {
    marginLeft: 8,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.mask,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalClose: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
