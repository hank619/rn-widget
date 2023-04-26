
/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:49
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 48,
    flexDirection: "row",
  },
  prefixContainer: {
    backgroundColor: Colors.ice,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderColor: Colors.fog,
  },
  prefix: {
    ...TypeFaces.body1,
    color: Colors.stone,
  },
  inputWithPrefix: {
    paddingHorizontal: 16,
    paddingVertical:12,
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  inputWithoutPrefix: {
    paddingHorizontal: 16,
    paddingVertical:12,
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 3,
  },
  focused: {
    borderColor: Colors.primary,
  },
  blur: {
    borderColor: Colors.fog,
  },
  success: {
  },
  error: {
    borderColor: Colors.redMedium,
  },
  warning: {
    borderColor: Colors.yellow,
  },
  disabled: {
    backgroundColor: Colors.ice,
  },
  enabled: {
    backgroundColor: Colors.white,
  },
  suffix: {
    position: 'absolute',
    alignSelf: 'center',
    right: 18,
  },
})