
import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

export const style = StyleSheet.create({
  button: {
    marginTop: 45,
    paddingVertical: 12,
    paddingHorizontal: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    elevation: 10,
    shadowColor: '#bad6fb',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  fullWidth: {
    width: '100%',
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
  },

  disabled: {
    opacity: 0.6,
  },

  changePassTxt:{
    textDecorationLine: "underline",
    marginTop: 32,
  },

  leftArrow: {
    position: 'absolute',
    top: height * -0.18,
    left: width * 0.04,
    zIndex: 10,
  },

  inputContainer: {
    marginTop: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#0060f0',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0004ff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#b2d7f8',
    width:width * 0.76
  },

  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#040668',
    padding: 0,
    margin: 0,
  },

  inputIcon: {
    marginRight: 12,
    color: '#040ce7',
  },

  eyeIcon: {
    color: '#0b2be3',
    marginLeft: 12,
  },

  placeholderColor: {
    color: '#000d55',
  },
});
