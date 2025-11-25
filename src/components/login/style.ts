import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

  button: {
    marginTop: 18,
    paddingVertical: 13,
    paddingHorizontal: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    elevation: 19,
    shadowColor: '#000000ff',
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
    color: "#0015b4ff",
    textDecorationLine: "underline",
    marginTop: 27,
  },

}
);