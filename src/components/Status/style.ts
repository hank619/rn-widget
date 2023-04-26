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
    backgroundColor: Colors.greenLight,
    color: Colors.green,
  },
  info: {
    backgroundColor: Colors.blueLight,
    color: Colors.blue,
  },
  warning: {
    backgroundColor: Colors.yellowLight,
    color: Colors.yellow,
  },
  error: {
    backgroundColor: Colors.redLight,
    color: Colors.redMedium,
  },
  invalid: {
    backgroundColor: Colors.grey,
    color: Colors.granite,
  }
});