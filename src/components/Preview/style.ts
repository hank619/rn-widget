/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-25 17:23:23
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  container: {
    display: "flex",
    width: 'auto',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    ...TypeFaces.body1,
  },
  icon: {
    marginLeft: 5
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.mask,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalContent: {
    width: '100%',
  },
  title: {
    ...TypeFaces.body1,
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 10,
    fontSize: 24,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLeftContainer: {
    backgroundColor: Colors.white,
    marginRight: 10,
    paddingVertical: 20,
  },
  navLeftContainerDisable: {
    backgroundColor: Colors.fog,
    marginRight: 10,
    paddingVertical: 20,
  },
  navLeft: {
    transform: [{ rotate: '-90deg' }],
  },
  imageContainer: {
    padding: 12,
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  navRightContainer: {
    backgroundColor: Colors.white,
    marginLeft: 10,
    paddingVertical: 20,
  },
  navRightContainerDisable: {
    backgroundColor: Colors.fog,
    marginLeft: 10,
    paddingVertical: 20,
  },
  navRight: {
    transform: [{ rotate: '90deg' }],
  },
});