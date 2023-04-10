/* eslint-disable camelcase */
import React from 'react'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

import { StatusBar } from 'react-native'

import { Routes } from './src/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
