/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Animated, ImageBackground, Image} from 'react-native';
import {splashScreenLogoAnimation} from '../../modules/redux/functions';
import {styles} from './styles';
import {image} from '../../src/img';

const SplashScreen = () => {
  const fadeAnimLogoValue = useRef(new Animated.Value(0)).current;

  splashScreenLogoAnimation(fadeAnimLogoValue);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <Animated.Image
          style={[styles.logo, {opacity: fadeAnimLogoValue}]}
          source={image.SPLASH_SCREEN_LOGO}
        />
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
