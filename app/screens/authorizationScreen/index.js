import React, {useState} from 'react';
import {
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {SvgImage} from '../../src/img/svgIcons';
import {string} from '../../services/utils/strings';
import {svgPath} from '../../services/utils/svgPaths';

const AuthorizationScreen = navigation => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const authUser = () => {
    login && password === 'lead'
      ? navigation.navigate(string.MAIN)
      : alert('Error');
  };
  return (
    <>
      <View style={styles.background}>
        <SvgImage path={svgPath.background} />
      </View>
      <KeyboardAvoidingView behavior={'height'} style={styles.container}>
        <TextInput
          onChangeText={value => setLogin(value)}
          placeholder={'Login'}
          style={styles.loginInput}
        />
        <TextInput
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder={'Password'}
          style={styles.passwordInput}
        />
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotButtonText}>Forgot your password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};
export default AuthorizationScreen;
