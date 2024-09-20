import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { Stack } from 'expo-router'
import { store } from '../redux/store'
// import { store } from '../redux/store'/

export default function _layout() {
  return (
    <Provider store={store}>
        <Stack/>
    </Provider>
  )
}