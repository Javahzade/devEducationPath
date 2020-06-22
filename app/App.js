import React, {useState, useEffect} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import SplashScreen from './screens/splashScreen';
import AuthStackNavigator from './modules/navigation/authStackNavigator';
import MainStackNavigator from './modules/navigation/mainStackNavigator';
import {styles} from './styles';
import {string} from './services/utils/strings';

const App = props => {
  const [currentScreen, setCurrentScreen] = useState(string.SPLASH_SCREEN);
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(string.AUTHORIZATION_SCREEN);
    }, 0);
  }, []);

  switch (currentScreen) {
    case string.SPLASH_SCREEN:
      return <SplashScreen />;
    case string.AUTHORIZATION_SCREEN:
      return (
        <NavigationContainer>
          {props.isSigned ? <MainStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
      );
  }

  return Platform.OS === string.IOS ? (
    <SafeAreaView style={styles.container}>{currentScreen}</SafeAreaView>
  ) : (
    {currentScreen}
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    isSigned: state.isSigned,
  }
}

export default connect(mapStateToProps, null)(App);
