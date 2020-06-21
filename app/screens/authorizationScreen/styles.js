import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../services/utils/colors';
import {dimension} from '../../services/utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  logo: {
    position: 'absolute',
    width: dimension.AUTH_LOGO_WIDTH,
    resizeMode: 'contain',
  },
  loginInput: {
    width: dimension.AUTH_TEXT_INPUT_WIDTH,
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  passwordInput: {
    width: dimension.AUTH_TEXT_INPUT_WIDTH,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  logButton: {
    marginVertical: 10,
    width: dimension.LOG_IN_BUTTON_WIDTH,
    alignItems: 'center',
    paddingVertical: 10,
  },
  forgotButton: {
    marginBottom: '20%',
    width: dimension.FORGOT_BUTTON_WIDTH,
    alignItems: 'center',
    paddingVertical: 10,
  },
  logButtonText: {
    fontSize: 18,
  },
  forgotButtonText: {
    fontSize: 18,
    color: color.FORGOT_PASSWORD_BUTTON_COLOR,
    textDecorationLine: 'underline',
  },
});
