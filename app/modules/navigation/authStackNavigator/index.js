import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthorizationScreen from '../../../screens/authorizationScreen';
import {string} from '../../../services/utils/strings';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={string.LOG_IN} component={AuthorizationScreen} />
    </AuthStack.Navigator>
  );
}
export default AuthStackNavigator;
