/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-26 16:02:49
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { TypeFaces, Colors } from "../../theme";

export default StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.mask,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalContent: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 24,
    flexDirection: "column",
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    ...TypeFaces.body1,
    fontWeight: '600',
  },
  content: {
    ...TypeFaces.body2,
    fontWeight: '500',
  },
  ok: {
    marginTop: 24,
  },
  cancel: {
    marginTop: 12,
  },
});