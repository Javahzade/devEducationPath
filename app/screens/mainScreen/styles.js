import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../services/utils/colors';
import {dimension} from '../../services/utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    width: Dimensions.get('window').width * 1.2,
    height: Dimensions.get('window').height,
    position: 'absolute',
    transform: [{rotate: '-90deg'}, {scale: 2}],
  },
  authBox: {
    flex: 0.9,
    width: dimension.AUTH_TEXT_INPUT_WIDTH,
    backgroundColor: 'rgba(9, 153, 179, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 160,
  },
  userImageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 90,
  },
  userImage: {
    zIndex: 2,
    width: 140,
    height: 140,
    borderRadius: 500,
  },
  userText: {
    fontSize: 24,
    color: color.WHITE,
    marginBottom: 16,
    marginTop: 70,
  },
  dataText: {
    marginTop: 8,
    fontSize: 18,
    color: color.WHITE,
  },
});
