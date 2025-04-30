import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../theme';
import ToolBar from '../../components/ToolBar';
import {AppText, SEVENTEEN, TWELVE} from '../../components/AppText';
import {nextIcon} from '../../utils/imageAssets';

const notificationListData = [
  {
    id: 1,
    title:
      'Booking #DRHJ248 - At Learning Center: Monthly Plan - Starter Family(1-Children),1-2 Days(Monday,Tuesday) is ready',
    time: '12-Mar-25, 07:26',
  },
  {
    id: 2,
    title:
      'Onvoice for booking #MKLP391 - At Home: Weekly Plan - Single Child(1-Children),3 Days(Wednesday,Thursday,Friday) is ready',
    time: '15-Mar-25, 09:10',
  },
  {
    id: 3,
    title:
      'Onvoice for booking #PLKD822 - At Learning Center: Monthly Plan - Advanced Family(2-Children),5 Days(Mon-Fri) is ready',
    time: '20-Mar-25, 11:45',
  },
  {
    id: 4,
    title:
      'Onvoice for booking #CXZF113 - At Home: Trial Plan - Single Child(1-Children),2 Days(Saturday,Sunday) is ready',
    time: '25-Mar-25, 08:00',
  },
  {
    id: 5,
    title:
      'Booking #VBNM764 - At Learning Center: Monthly Plan - Starter Family(1-Children),1-2 Days(Monday,Tuesday) is ready',
    time: '28-Mar-25, 14:30',
  },
];

const Notification = () => {
  const renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity key={index} style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <AppText type={SEVENTEEN} style={styles.titleText}>
            {item?.title}
          </AppText>
          <AppText type={TWELVE} style={styles.timeText}>
            {item?.time}
          </AppText>
        </View>
        <Image
          source={nextIcon}
          style={styles.rightIcon}
          resizeMode="contain"
          tintColor={Colors.grey}
        />
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ToolBar leftIcon isBack title="Notifications" />
      <FlatList
        keyExtractor={item => item?.id.toString()}
        data={notificationListData}
        renderItem={renderItem}
        contentContainerStyle={styles.listStyle}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listStyle: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingLeft: 16,
    backgroundColor: Colors.white,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontWeight: '600',
    color: Colors.black,
    lineHeight: 20,
  },
  timeText: {
    marginTop: 4,
    color: Colors.grey,
  },
  rightIcon: {
    width: 18,
    height: 18,
  },
  separator: {
    backgroundColor: Colors.border,
    height: 0.5,
    marginLeft: 16,
  },
});
