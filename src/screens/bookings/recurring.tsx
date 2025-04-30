import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../theme';
import ToolBar from '../../components/ToolBar';
import {notificationIcon} from '../../utils/imageAssets';
import {AppText, EIGHTEEN, THIRTEEN} from '../../components/AppText';
import { bookingsData } from '../../utils/dummyData';

const Recurring = () => {
  const renderItem = ({item}) => (
    <>
      <View style={styles.card}>
        <View>
          <AppText type={EIGHTEEN} style={styles.title}>
            {item.title}
          </AppText>

          <AppText type={THIRTEEN} style={styles.subText}>
            {item.location}, Starts from: {item.startDate}
          </AppText>
          <AppText type={THIRTEEN} style={styles.subText}>
            {item.days}
          </AppText>
        </View>
        <View style={[styles.statusBadge(item?.status)]}>
          <AppText type={THIRTEEN} style={styles.statusText(item?.status)}>
            {item.status}
          </AppText>
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );

  return (
    <View style={styles.container}>
      <ToolBar
        left
        isBack
        title="My Recurring Bookings"
        rightIcon={notificationIcon}
      />
      <FlatList
        data={bookingsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Recurring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: Colors.white,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontWeight: '900',
    flex: 1,
    marginRight: 8,
  },
  subText: {
    marginTop: 4,
    fontSize: 13,
    color: Colors.grey,
    lineHeight: 20,
    letterSpacing: 1,
  },
  statusBadge: status => ({
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: status === 'pending' ? Colors.statusBg1 : Colors.statusBg2,
  }),
  statusText: status => ({
    fontWeight: 'bold',
    color: status === 'pending' ? Colors.statusText1 : Colors.statusText2,
  }),
  pending: {
    backgroundColor: Colors.statusBg1,
  },
  approved: {
    backgroundColor: Colors.statusBg2,
  },
  separator: {
    backgroundColor: Colors.border,
    height: 0.5,
    marginLeft: 16,
  },
});
