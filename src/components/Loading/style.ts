/*
 * @Author: Hong.Zhang
 * @Date: 2022-01-13 14:47:25
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export default StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999, // to place the loading at the most front
    backgroundColor: Colors.transparent,
  },
  shadow: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: Colors.grey,
    elevation: 6, // only work on android and larger than 5.0
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
});