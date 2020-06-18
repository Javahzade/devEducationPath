/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Animated, ImageBackground, Image} from 'react-native';
import {splashScreenLogoAnimation} from '../../modules/redux/functions';
import {style} from './styles';
import {image} from '../../src/img';

const SplashScreen = () => {
  const fadeAnimLogoValue = useRef(new Animated.Value(0)).current;

  splashScreenLogoAnimation(fadeAnimLogoValue);

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.background}
        source={image.SPLASH_SCREEN_BACKGROUND}>
        <Animated.Image
          style={[style.logo, {opacity: fadeAnimLogoValue}]}
          source={image.SPLASH_SCREEN_LOGO}
        />
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
