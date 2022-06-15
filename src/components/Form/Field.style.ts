import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  label: {
    ...TypeFaces.body1,
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
});