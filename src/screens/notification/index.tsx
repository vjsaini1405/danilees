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
import { notificationListData } from '../../utils/dummyData';


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
      <ToolBar left isBack title="Notifications" />
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
