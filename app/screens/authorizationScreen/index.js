import React from 'react';
import {ImageBackground, ScrollView, TextInput, View} from 'react-native';
import {styles} from './styles';
import {image} from '../../src/img';

const AuthorizationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={styles.background}
        source={image.AUTH_SCREEN_BACKGROUND}>
        <TextInput placeholder={'Login'} style={styles.loginInput} />
        <TextInput placeholder={'Password'} style={styles.passwordInput} />
      </ImageBackground>
    </ScrollView>
  );
};
export default AuthorizationScreen;
