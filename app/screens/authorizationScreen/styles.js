import {StyleSheet} from 'react-native';
import {color} from '../../services/utils/colors';
import {dimension} from '../../services/utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    width: dimension.AUTH_LOGO_WIDTH,
    resizeMode: 'contain',
  },
  loginInput: {
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  passwordInput: {
    width: '80%',
    backgroundColor: 'white',
    marginBottom: '30%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
