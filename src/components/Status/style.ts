/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-24 18:05:26
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  text: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    ...TypeFaces.body3,
    lineHeight: 16,
    fontWeight: '700',
  },
  success: {
    backgroundColor: Colors.lightGreen,
    color: Colors.green,
  },
  info: {
    backgroundColor: Colors.lightBlue,
    color: Colors.blue,
  },
  warning: {
    backgroundColor: Colors.lightYellow,
    color: Colors.yellow,
  },
  error: {
    backgroundColor: Colors.lightRed,
    color: Colors.red,
  },
  invalid: {
    backgroundColor: Colors.grey,
    color: Colors.grantie,
  }
});