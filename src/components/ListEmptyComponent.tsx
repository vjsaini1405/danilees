import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {FC} from 'react';
import {AppText, MEDIUM, NORMAL, THIRTEEN} from './AppText';
import {Colors} from '../theme';

interface ListEmptyComponentProps {
  containerStyle: ViewProps|undefined;
  title: string;
}

const ListEmptyComponent: FC<ListEmptyComponentProps> = ({
  containerStyle,
  title,
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <AppText type={THIRTEEN} weight={MEDIUM} style={styles.titleStyle}>
        {title ? title : 'No booking found'}
      </AppText>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  containerStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  titleStyle: {color: Colors.grey},
});
