import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../theme';
import {
  AppText,
  BLACK,
  BOLD,
  EIGHTEEN,
  FOURTEEN,
  MEDIUM,
  NORMAL,
  SIXTEEN,
  THIRTEEN,
  WHITE,
} from '../../components/AppText';
import ToolBar from '../../components/ToolBar';
import {
  filterCalenderIcon,
  filterIcon,
  notificationIcon,
} from '../../utils/imageAssets';
import TabButton from '../../components/TabButton';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import NavigationService from '../../navigation/NavigationService';
import * as routes from '../../navigation/routes';
import { bookingTab } from '../../utils/dummyData';

const Booking = () => {
  const [activeTab, setActiveTab] = useState(0);

  const Data = [];

  return (
    <View style={styles.mainContainer}>
      <ToolBar
        left
        handleLeftOnPress={() =>
          NavigationService.navigate(routes.RECUSSING_SCREEN)
        }
        leftTitle="Recurring"
        title="Adhoc Bookings"
        rightIcon={notificationIcon}
      />
      <View style={styles.containerStyle}>
        <TabButton
          tab={bookingTab}
          activeTab={activeTab}
          handleOnPress={index => setActiveTab(index)}
        />

        {Data?.length > 0 ? (
          Data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listBtnStyle}>
              <AppText type={SIXTEEN} weight={MEDIUM}>
                {item?.title}
              </AppText>
            </TouchableOpacity>
          ))
        ) : (
          <ListEmptyComponent />
        )}

        {Data.length > 0 && (
          <>
            <TouchableOpacity style={styles.btnStyle}>
              <AppText color={WHITE} weight={BOLD} type={FOURTEEN}>
                {'Next'}
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary}>
              <AppText color={WHITE} weight={BOLD} type={FOURTEEN}>
                {'See all Plans'}
              </AppText>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity style={styles.leftFab}>
          <Image
            source={filterIcon}
            style={styles.fabIcon}
            resizeMode="contain"
            tintColor={Colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightFab}>
          <Image
            source={filterCalenderIcon}
            style={styles.fabIcon}
            resizeMode="contain"
            tintColor={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  containerStyle: {
    paddingHorizontal: 24,
    flex: 1,
    paddingTop: 20,
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
  btnSecondary: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  leftFab: {
    position: 'absolute',
    bottom: '10%',
    left: 20,
    backgroundColor: Colors.tabBg,
    borderRadius: 50,
    padding: 10,
  },
  rightFab: {
    position: 'absolute',
    bottom: '10%',
    right: 20,
    backgroundColor: Colors.tabBg,
    borderRadius: 50,
    padding: 10,
  },
  fabIcon: {
    width: 40,
    height: 40,
  },
});
