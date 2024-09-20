import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countSelector } from "../redux/selectors/countSelector";
import { decrementA, incrementA } from "../redux/action/counterA";

export default function index() {
  const count = useSelector(countSelector);
  // const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>count = {count}</Text>
      <Button title="increment" onPress={() => dispatch(incrementA())} />
      <Button title="decrement" onPress={() => dispatch(decrementA())} />
    </View>
  );
}
