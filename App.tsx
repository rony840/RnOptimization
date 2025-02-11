/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NotOptimized from './src/screens/NotOptimized';
import AppNavigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
      <AppNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1
  }
});

export default App;
