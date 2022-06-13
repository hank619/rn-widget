
/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:49
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    ...TypeFaces.body1,
    marginBottom: 9,
  },
  input: {
    ...TypeFaces.body1,
    width: "100%",
    height: 120,
    paddingHorizontal: 16,
    paddingVertical:12,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 3,
    textAlignVertical: "top",
  },
  focused: {
    borderColor: Colors.primary,
  },
  blur: {
    borderColor: Colors.fog,
  },
  error: {
    borderColor: Colors.red,
  },
  disabled: {
    backgroundColor: Colors.ice,
  },
  enabled: {
    backgroundColor: Colors.white,
  },
  bottomContainer: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  invalid: {
    ...TypeFaces.body2,
    color: Colors.red,
    flex: 1,
  },
  count: {
    ...TypeFaces.body2,
    color: Colors.grantie,
  },
  description: {
    width: '100%',
    marginTop: 6,
    ...TypeFaces.body2,
    color: Colors.stone,
    fontStyle: 'italic',
  }
})