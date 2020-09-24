import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/globalStyles/styles';
import { MainNavigator } from './src/navigations/';

export default function App() {
  return  (
      <MainNavigator />
  );
}

