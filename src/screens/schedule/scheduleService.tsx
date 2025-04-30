import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ToolBar from '../../components/ToolBar';
import {notificationIcon} from '../../utils/imageAssets';
import {Colors} from '../../theme';
import {
  AppText,
  BLACK,
  BOLD,
  EIGHTEEN,
  FOURTEEN,
  MEDIUM,
  SIXTEEN,
  WHITE,
} from '../../components/AppText';
import TabButton from '../../components/TabButton';
import { scheduleServicetab } from '../../utils/dummyData';

const ScheduleService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const adhocData = [
    {id: 1, title: "DaniLee's Pelham, NY", onPress: () => {}},
    {id: 2, title: 'Select Service', onPress: () => {}},
    {id: 3, title: 'Select Date', onPress: () => {}},
    {id: 4, title: 'Select Time', onPress: () => {}},
  ];

  const serviceData = [
    {id: 1, title: "DaniLee's Pelham, NY", onPress: () => {}},
    {id: 2, title: 'Select Service', onPress: () => {}},
    {id: 3, title: 'Select Date', onPress: () => {}},
  ];

  const Data = activeTab === 0 ? adhocData : serviceData;

  return (
    <View style={styles.mainContainer}>
      <ToolBar title="ScheDule" rightIcon={notificationIcon} />
      <View style={styles.containerStyle}>
        <AppText type={EIGHTEEN} color={BLACK} style={styles.headingStyle}>
          Schedule a Service
        </AppText>
        <TabButton
          tab={scheduleServicetab}
          activeTab={activeTab}
          handleOnPress={index => {
            setActiveTab(index);
          }}
        />
        {Data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.listBtnStyle}>
            <AppText type={SIXTEEN} weight={MEDIUM}>
              {item?.title}
            </AppText>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.btnStyle}>
          <AppText color={WHITE} weight={BOLD} type={FOURTEEN}>
            {'Next'}
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnStyle, {marginTop: 20}]}>
          <AppText color={WHITE} weight={BOLD} type={FOURTEEN}>
            {'See all Plans'}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleService;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  containerStyle: {
    paddingHorizontal: 24,
  },
  headingStyle: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  listBtnStyle: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 40,
  },
});
