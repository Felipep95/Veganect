import React from 'react';
import { MainNavigator } from './src/navigations/';

import firebase from 'firebase';
import { firebaseConfig } from './src//config/firebase-config';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/globalStyles/styles';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return  (
      <MainNavigator />
  );
}

