import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const rf = (size: number) => size * (width / 375);

export const Colors = {
  darkPrimary: '#01004f',
  darkSecondary: '#0b003b',
  darkTertiary: '#2600cf',
  goldPrimary: '#006eff',
  inputBackground: '#b2d7f8',
  inputText: '#006eff',
  grayLight: '#b2d7f8',
  textPrimary: '#e4f0fb',
  textSecondary: '#026ce5',
  overlay: '#03178b95',
};

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },

  scrollContent: {
    padding: 16,
  },

  fieldContainer: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: 12,
    padding: 15,
    marginBottom: 18,
    borderWidth: 1,
  },

  fieldContainerGold: {
    borderColor: Colors.goldPrimary,
  },

  fieldLabel: {
    fontSize: rf(13),
    color: Colors.goldPrimary,
    marginBottom: 8,
    letterSpacing: 2,
  },

  textFieldInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    fontSize: rf(15),
    color: Colors.inputText,
  },

  textFieldInputFocused: {
    borderColor: Colors.goldPrimary,
    borderWidth: 2,
  },

  maskedInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 9,
    padding: 13,
    fontSize: rf(15),
  },

  maskedInputFocused: {
    borderColor: Colors.goldPrimary,
    borderWidth: 3,
  },

  disabledInput: {
    backgroundColor: Colors.grayLight,
  },

  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  passwordDots: {
    fontSize: rf(18),
    color: Colors.textPrimary,
  },

  changePasswordText: {
    color: Colors.goldPrimary,
    fontSize: rf(14),
  },

  actionsContainer: {
    marginTop: 22,
  },

  customButton: {
    backgroundColor: Colors.darkTertiary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
  },

  buttonText: {
    color: Colors.textPrimary,
    fontWeight: '600',
    letterSpacing: 1,
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.overlay,
  },

  modalContainer: {
    width: '83%',
    maxHeight: '86%',
    backgroundColor: Colors.darkSecondary,
    borderRadius: 18,
    overflow: 'hidden',
  },
  
  modalHeader: {
    alignItems: 'center',
    padding: 25,
    borderBottomWidth: 4,
    borderBottomColor: Colors.goldPrimary,
  },

  modalTitle: {
    color: Colors.goldPrimary,
    fontSize: rf(19),
    marginTop: 9,
  },

  modalSubtitle: {
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 9,
  },

  modalBody: {
    padding: 22,
  },

  modalInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 9,
    padding: 12,
    marginBottom: 13,
  },

  modalFooter: {
    padding: 18,
  },

});