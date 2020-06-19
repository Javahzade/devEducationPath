import React from 'react';
import {
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from './styles';

const AuthorizationScreen = () => {
  return (
    <ImageBackground style={styles.background}>
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <TextInput placeholder={'Login'} style={styles.loginInput} />
        <TextInput placeholder={'Password'} style={styles.passwordInput} />
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotButtonText}>Forgot your password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default AuthorizationScreen;
