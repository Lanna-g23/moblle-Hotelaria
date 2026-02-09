import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

export const style = StyleSheet.create({

  button: {
    marginTop: 19,
    paddingVertical: 14,
    paddingHorizontal: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    elevation: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.5,
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
    position: 'absolute',
    top: height * -0.16,
    left: width * 0.04,
    zIndex: 10,
  },

});