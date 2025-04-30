import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import NavigationService from '../navigation/NavigationService';
import * as routes from '../navigation/routes';
import {LogoImage} from '../utils/imageAssets';

const SplashScreen = () => {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      NavigationService.navigate(routes?.LOGIN_SCREEN);
    }, 1500);

    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
