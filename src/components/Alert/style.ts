/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-25 16:11:21
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 3,
  },
  success: {
    backgroundColor: Colors.greenLight,
  },
  info: {
    backgroundColor: Colors.blueLight,
  },
  warning: {
    backgroundColor: Colors.yellowLight,
  },
  error: {
    backgroundColor: Colors.redLight,
  },
  image: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    ...TypeFaces.body2,
    alignSelf: 'center',
  },
});