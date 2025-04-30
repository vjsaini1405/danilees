import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme';
import ToolBar from '../../components/ToolBar';
import {nextIcon, notificationIcon} from '../../utils/imageAssets';
import {AppText, FOURTEEN, SIXTEEN} from '../../components/AppText';
import ReactNativeVersionInfo from 'react-native-version-info';

let version = ReactNativeVersionInfo.appVersion;
let buildVersion = ReactNativeVersionInfo.buildVersion;


const Profile = () => {
  const ProfileData = [
    {id: 1, title: 'My Profile', onPress: () => {}},
    {id: 2, title: 'Invoices', onPress: () => {}},
    {id: 3, title: 'Kids', onPress: () => {}},
    {id: 4, title: 'About Us', onPress: () => {}},
    {id: 5, title: 'Terms & Conditions', onPress: () => {}},
    {id: 6, title: 'Logout', onPress: () => {}},
    {id: 7, title: 'Close', onPress: () => {}},
  ];

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <ToolBar title="My Profile" rightIcon={notificationIcon} />

      {ProfileData.map((item, index) => (
        <TouchableOpacity
        onPress={item?.onPress}
        key={index}
          style={{
            marginLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 10,
            paddingVertical: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.placeholderColor,
          }}>
          <AppText type={SIXTEEN}>{item?.title}</AppText>
          <Image
            source={nextIcon}
            style={{width: 20, height: 20}}
            resizeMode="contain"
            tintColor={Colors.placeholderColor}
          />
        </TouchableOpacity>
      ))}
      <View style={{alignItems:'center',justifyContent:'center',
       paddingVertical: 10,
       borderBottomWidth: 0.5,
            borderBottomColor: Colors.placeholderColor}}>
        <AppText>
          {`Version ${version}(${buildVersion})`}
          {/* {`Version {${version} `(${buildVersion})`}}`} */}
          </AppText>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
