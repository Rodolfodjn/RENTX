import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts,
Inter_400Regular,
Inter_500Medium } from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import {ThemeProvider} from 'styled-components';

import {Routes} from './src/routes';
import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded]= useFonts({
    Inter_400Regular,
Inter_500Medium,
Archivo_400Regular,
Archivo_500Medium,
Archivo_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={theme}>
    <Routes/>
    </ThemeProvider>
  );
}

