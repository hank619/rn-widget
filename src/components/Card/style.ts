/*
 * @Author: Hong.Zhang
 * @Date: 2021-12-01 16:48:52
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    backgroundColor: Colors.grey,
    paddingHorizontal: 24,
    paddingVertical: 6,
    ...TypeFaces.body2,
    fontWeight: '700',
  },
  item: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  label: {
    ...TypeFaces.body3,
    color: Colors.stone,
    fontWeight: '500',
  },
  value: {
    marginTop: 2,
    ...TypeFaces.body1,
    fontWeight: '600',
  },
});