/*
 * @Author: Hong.Zhang
 * @Date: 2021-06-18 13:19:40
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Colors, TypeFaces } from '../../theme';

export default StyleSheet.create({
  dateContainer: {
    display: 'flex',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.fog, 
    backgroundColor: Colors.white,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 4,
  },
  success: {},
  error: {
    borderColor: Colors.redMedium,
  },
  warning: {
    borderColor: Colors.yellow,
  },
  dateText: {
    ...TypeFaces.body1,
    flex: 1,
  },
  confirmContainer: {
    alignItems: 'center',
  },
  confirmText: {
    ...TypeFaces.body2,
    color: Colors.primary,
  },
  dateIcon: {},
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  absoluteContainer: {
    position: 'absolute',
  },
});
