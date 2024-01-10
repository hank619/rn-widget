
/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 15:55:49
 * @Description: 
 */
import { StyleSheet } from "react-native";
import { Colors, TypeFaces } from "../../theme";

export default StyleSheet.create({
  iosContainer: {
    zIndex: 10,
  },
  androidContainer: {
  },
  selectContainer: {
    width: '100%',
    height: 48,
    flexDirection: "row",
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical:12,
    flex: 1,
    backgroundColor: Colors.white,
    ...TypeFaces.body1,
    borderWidth: 1,
    borderRadius: 3,
  },
  focused: {
    borderColor: Colors.primary,
  },
  blur: {
    borderColor: Colors.fog,
  },
  success: {},
  warning: {
    borderColor: Colors.yellow,
  },
  error: {
    borderColor: Colors.redMedium,
  },
  // position that relevant to top
  expandTop: {
    borderBottomColor: Colors.fog,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  // position that relevant to bottom
  expandBototm: {
    borderTopColor: Colors.fog,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  disabled: {
    backgroundColor: Colors.ice,
  },
  enabled: {
    backgroundColor: Colors.white,
  },
  arrowReverse: {
    position: 'absolute',
    alignSelf: 'center',
    right: 8,
    transform: [{ scaleY: -1 }],
  },
  arrowUp: {
    position: 'absolute',
    alignSelf: 'center',
    right: 8,
  },

  guideline: {
    height:0, backgroundColor: Colors.white
  },
  dropdown: {
    position: 'absolute',
    elevation: 1000,
    zIndex: 1000,
    maxHeight: 240,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderLeftColor: Colors.primary,
    borderRightColor: Colors.primary,
    width: '100%',
  },
  // position that relevant to top
  dropdownTop: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopColor: Colors.transparent,
    borderBottomColor: Colors.primary,
  },
  // position that relevant to bottom
  dropdownBottom: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.transparent,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 48,
  },
  selected: {
    backgroundColor: Colors.primaryLight,
  },
  notSelected: {
    backgroundColor: Colors.white,
  },
  itemText: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical:12,
    ...TypeFaces.body1,
  },
  itemImage: {
    position: 'absolute',
    alignSelf: 'center',
    right: 8,
  },

  invalid: {
    marginTop: 7,
    ...TypeFaces.body2,
    color: Colors.redMedium,
  },
})