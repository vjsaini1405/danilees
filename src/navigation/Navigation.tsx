import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationService from './NavigationService';
import * as routes from './routes';
import Login from '../screens/auth/login';
import SplashScreen from '../screens/splashScreen';
import BottomNavigation from './BottomNavigation';
import Notification from '../screens/notification';
import Recurring from '../screens/bookings/recurring';
import ForgotPasword from '../screens/auth/forgotPasword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef: any) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName={routes?.SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes?.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={routes?.LOGIN_SCREEN} component={Login} />
        <Stack.Screen name={routes?.FORGOT_PASSWORD_SCREEN} component={ForgotPasword} />
        <Stack.Screen
          name={routes?.NOTIFICATION_SCREEN}
          component={Notification}
        />
        <Stack.Screen
          name={routes?.RECUSSING_SCREEN}
          component={Recurring}
        />
        <Stack.Screen
          name={routes?.BOTTOM_TAB_NAVIGATIION}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
