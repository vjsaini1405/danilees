import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const App = () => {

  return (
    <GestureHandlerRootView style={styles.container}>
        <Navigation />
        </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
