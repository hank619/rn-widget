/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 15:18:39
 * @Description: 
 */
import { StyleSheet } from 'react-native';
import { Colors, TypeFaces } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 24,
    paddingRight: 20,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
  },
  selected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primarLight,
  },
  unselected: {
    borderColor: Colors.fog,
    backgroundColor: Colors.white,
  },
  first: {
  },
  notFirst: {
    marginTop: 16,
  },
  text: {
    flex: 1,
    ...TypeFaces.body2,
    fontWeight: '500',
  },
  image: {
    marginLeft: 4,
  },
  imageSelected: {
    tintColor: Colors.primary,
  },
  imageUnselected: {
    tintColor: Colors.fog,
  },
});