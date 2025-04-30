import {View, StyleSheet, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {Colors, fontFamily} from '../../theme';
import {AppText, BOLD, FOURTEEN, TWELVE, WHITE} from '../../components/AppText';
import {LogoImage} from '../../utils/imageAssets';
import ToolBar from '../../components/ToolBar';
import FloatingInput from '../../components/FloatingInput';
import TouchableOpacityView from '../../components/TouchableOpacityView';
import NavigationService from '../../navigation/NavigationService';
import * as routes from '../../navigation/routes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Successfully');
    NavigationService.navigate(routes?.BOTTOM_TAB_NAVIGATIION);
  };

  const handleSignUp = () => {
    NavigationService.navigate(routes?.SIGNUP_SCREEN);
  };
  return (
    <View style={styles.mainContainer}>
      <ToolBar title="Login" />

      <View style={styles.container}>
        <Image
          source={LogoImage}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <View style={styles.secondContainer}>
          <FloatingInput label="E-Mail" value={email} setValue={setEmail} />
          <FloatingInput
            label="Password"
            value={password}
            setValue={setPassword}
          />
        </View>
        <TouchableOpacityView
          onPress={() =>
            NavigationService.navigate(routes?.FORGOT_PASSWORD_SCREEN)
          }>
          <AppText type={TWELVE} style={styles.forgotPasswordText}>
            Forgot Password
          </AppText>
        </TouchableOpacityView>
        <TouchableOpacityView
          onPress={() => handleLogin()}
          containerStyle={styles.buttonStyle}>
          <AppText type={FOURTEEN} weight={BOLD} color={WHITE}>
            {'Login'}
          </AppText>
        </TouchableOpacityView>

        <TouchableOpacityView
          onPress={() => handleSignUp()}
          containerStyle={[
            styles.buttonStyle,
            {
              marginTop: 15,
            },
          ]}>
          <AppText
            type={FOURTEEN}
            style={{fontFamily: fontFamily?.EXTRA_BOLD}}
            color={WHITE}>
            {'Create Account'}
          </AppText>
        </TouchableOpacityView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoStyle: {height: 250, width: 250},
  secondContainer: {gap: 10, width: '100%'},
  buttonStyle: {
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  forgotPasswordText: {
    color: Colors.placeholderColor,
    textAlign: 'center',
    marginVertical: 20,
  },
});
