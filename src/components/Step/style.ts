/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-14 16:44:31
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export default StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 4,
  },
  fwContainerStyle: {
    justifyContent: 'space-between',
  },
  cwContainerStyle: {
    justifyContent: 'flex-start',
  },
  itemStyle: {
    height: '100%',
    borderRadius: 2,
  },
  fwItemStyle: {
    flex: 1,
  },
  cwItemStyle: {
  },
  highlight: {
    backgroundColor: Colors.primary,
  },
  normal: {
    backgroundColor: Colors.grey,
  },
  first: {
  },
  notFirst: {
    marginLeft: 6
  },
});