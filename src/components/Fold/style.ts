/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-26 16:02:49
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { TypeFaces, Colors } from "../../theme";

export default StyleSheet.create({
  foldContainer: {
    width: "100%",
    flexDirection: 'column',
  },
  titleContainer: {
    width: "100%",
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    ...TypeFaces.body2,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 24,
  },
  fold: {
    transform: [{ scaleY: -1 }],
  },
  unFold: {
  },
  content: {
    marginTop: 12,
    ...TypeFaces.body2,
    color: Colors.stone,
  }
});