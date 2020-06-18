import {Animated} from 'react-native';

export const splashScreenLogoAnimation = value => {
  return Animated.loop(
    Animated.sequence([
      Animated.timing(value, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 0.3,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();
};
