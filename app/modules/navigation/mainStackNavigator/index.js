import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../../screens/mainScreen';
import CommentsScreen from '../../../screens/commentsScreen';
import {string} from '../../../services/utils/strings';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={string.MAIN} component={MainScreen} />
      <MainStack.Screen name={string.COMMENTS} component={CommentsScreen} />
    </MainStack.Navigator>
  );
}
export default MainStackNavigator;
