/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 13:55:34
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { TypeFaces, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 11,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  success: {
  },
  error: {
    tintColor: Colors.redMedium,
  },
  warning: {
    tintColor: Colors.yellow,
  },
  content: {
    width: '100%',
    ...TypeFaces.body3,
    color: Colors.stone,
    fontWeight: '500',
  }
});