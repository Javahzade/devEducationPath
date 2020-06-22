import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../services/utils/colors';
import {dimension} from '../../services/utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authBox: {
    width: dimension.AUTH_TEXT_INPUT_WIDTH,
    backgroundColor: 'rgba(9, 153, 179, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: '10%',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    transform: [{rotate: '-90deg'}, {scale: 2}],
  },
  authInput: {
    width: dimension.AUTH_TEXT_INPUT_WIDTH,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 8,
  },
  loginButton: {
    width: dimension.LOG_IN_BUTTON_WIDTH,
    alignItems: 'center',
    backgroundColor: '#114466',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  forgotButton: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  loginButtonText: {
    fontSize: 18,
    color: color.WHITE,
  },
  forgotButtonText: {
    fontSize: 18,
    color: color.FORGOT_PASSWORD_BUTTON_COLOR,
    textDecorationLine: 'underline',
  },
});
