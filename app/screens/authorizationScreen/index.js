import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {authAction} from '../../modules/redux/actions';
import {SvgImage} from '../../src/img/svgIcons';
import {svgPath} from '../../services/utils/svgPaths';

const AuthorizationScreen = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const authUser = () => {
    login && password === 'lead' ? dispatch(authAction()) : alert('Error');
  };
  return (
    <>
      <View style={styles.background}>
        <SvgImage path={svgPath.background} />
      </View>
      <KeyboardAvoidingView behavior={'height'} style={styles.container}>
        <View style={styles.authBox}>
          <TextInput
            onChangeText={value => setLogin(value)}
            placeholder={'Login'}
            style={styles.authInput}
          />
          <TextInput
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder={'Password'}
            style={styles.authInput}
          />
          <TouchableOpacity
            onPress={() => authUser()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotButtonText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default AuthorizationScreen;
