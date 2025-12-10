import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

export const style = StyleSheet.create({

  button3: {
    display: "flex",
    marginTop: 19,
    paddingVertical: 14,
    paddingHorizontal: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    elevation: 10,
    shadowColor: '#000000ff',
    shadowOpacity: 0.04,
    shadowRadius: 5,
  },

  fullWidth: {
    width: '100%',
  },

  text: {
    fontSize: 17,
    fontWeight: '600',
  },

  disabled: {
    opacity: 0.6,
  },

  changePassTxt:{
    textDecorationLine: "underline",
    marginTop: 30,
  },

  leftArrow: {
    display: "flex",
    position: 'absolute',
    top: height * -0.18,
    left: width * 0.001,
    zIndex: 10,
  },

});