import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  label: {
    ...TypeFaces.body1,
    marginVertical: 8,
  },
  extra: {
    marginTop: 26,
    ...TypeFaces.body3,
    fontWeight: '500',
    color: Colors.stone,
  },
  error: {
    color: Colors.red,
  },
  success: {
    color: Colors.green,
  },
  warning: {
    color: Colors.yellow,
  },
  iosFocusedContainer: {
    zIndex: 11,
  },
  iosNormalContainer: {
    zIndex: 10,
  },
  androidContainer: {
  },
});