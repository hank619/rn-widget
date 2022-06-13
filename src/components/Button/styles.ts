/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-23 11:19:01
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  baseButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  fwContainer: {
    width: "100%",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  fwContainerDisabled: {
    borderWidth: 1,
    borderColor: Colors.fog,
    backgroundColor: Colors.fog,
  },
  fwContainerPrimary: {
    backgroundColor: Colors.primary,
  },
  fwContainerSecondary: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  fwText: {
  },
  fwTextDisabled: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.white,
  },
  fwTextPrimary: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.white,
  },
  fwTextSecondary: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.primary,
  },


  cwContainer: {
    borderRadius: 50,
  },
  cwContainerDisabled: {
    borderWidth: 1,
    borderColor: Colors.fog,
    backgroundColor: Colors.fog,
  },
  cwContainerPrimary: {
    backgroundColor: Colors.primary,
  },
  cwContainerSecondary: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  cwText: {
  },
  cwTextDisabled: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.white,
  },
  cwTextPrimary: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.white,
  },
  cwTextSecondary: {
    ...TypeFaces.body1,
    fontWeight: <const> '500',
    color: Colors.primary,
  },

});