import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../../screens/mainScreen';
import CommentsScreen from '../../../screens/commentsScreen';
import {string} from '../../../services/utils/strings';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={string.MAIN} component={MainScreen} />
      <AuthStack.Screen name={string.COMMENTS} component={CommentsScreen} />
    </AuthStack.Navigator>
  );
}
export default AuthStackNavigator;
