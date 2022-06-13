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
    backgroundColor: Colors.lightGreen,
  },
  info: {
    backgroundColor: Colors.lightBlue,
  },
  warning: {
    backgroundColor: Colors.lightYellow,
  },
  error: {
    backgroundColor: Colors.lightRed,
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