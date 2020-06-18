import {StyleSheet} from 'react-native';
import {color} from '../../services/utils/colors';
import {dimension} from '../../services/utils/constants';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    width: dimension.LOGO_WIDTH,
    resizeMode: 'contain',
  },
});
