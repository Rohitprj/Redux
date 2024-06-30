import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../services/Store/counterSlice";

export default function ReduxCart() {
  const Counter = useSelector((selector) => selector.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>ReduxCart</Text>
      <Text>Redux Cart Value={Counter.value}</Text>
      {/* <Text>Redux Cart Value{Counter.cart}</Text> */}
      <Text>-------------------------------------------</Text>
      <Button title="Increase" onPress={()=>dispatch(increment())}/>
      <Button title="Decrement" onPress={()=>dispatch(decrement())}/>
    </View>
  );
}
