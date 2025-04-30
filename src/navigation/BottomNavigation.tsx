import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../theme';
import * as routes from './routes';
import ScheduleService from '../screens/schedule/scheduleService';
import {
  calenderIcon,
  profileIcon,
  scheduleServiceIcon,
} from '../utils/imageAssets';
import Booking from '../screens/bookings/booking';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const TabIcon = ({icon, focused}: any) => (
  <View style={focused ? styles.tabFocused : styles.tabUnfocused}>
    <Image
      source={icon}
      style={styles.tabIcon}
      tintColor={focused ? Colors.tabBg : Colors.inActiveTab}
      resizeMode="contain"
    />
  </View>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.SCHEDULE_SCREEN}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={routes.SCHEDULE_SCREEN}
        component={ScheduleService}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={scheduleServiceIcon} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.BOOKING_SCREEN}
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={calenderIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={profileIcon} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  tabFocused: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabUnfocused: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
