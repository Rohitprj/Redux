import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Provider } from "react-redux";
import store from "../services/Store/store";

export default function Layout() {
  return(
  <Provider store={store}>
    <Drawer />
  </Provider>
  )
}
