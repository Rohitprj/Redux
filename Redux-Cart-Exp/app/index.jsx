import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countSelector } from "../redux/selectors/countSelector";
import { decrementA, incrementA } from "../redux/action/counterA";
import { selectorApi } from "../redux/selectors/selectorApi";
import { fetchRequest } from "../redux/action/actionApi";

export default function index() {
  const count = useSelector(countSelector);
  const apiData = useSelector(selectorApi);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  
  useEffect(() => {
      setData(apiData);
  }, []);
  // console.log(data);
  // const product = data && data.products && data.products.length > 0 ? data.products[0] : null;
  return (
    <View style={{ gap: 10, paddingHorizontal: 10 }}>
      <Text>count = {count}</Text>
      <Button title="increment" onPress={() => dispatch(incrementA())} />
      <Button title="decrement" onPress={() => dispatch(decrementA())} />
      <Button title="Api" onPress={() => dispatch(fetchRequest())} />
      <View>
      {/* {product ? (
          <View>
            <Text>Product Title: {product.title}</Text>
            <Text>MRP: {product.mrp}</Text>
            <Text>Price: {product.price}</Text>
          </View>
        ) : (
          <Text>No Product Data Available</Text>
        )} */}
        {/* <Text>{product.title}</Text> */}
        {/* <Text>{item.products.title}</Text> */}
      </View>
    </View>
  );
}

// const { data, loading, error } = useSelector((state) => state);

//       {loading && <Text>Loading...</Text>}
//       {error && <Text>Error {error}</Text>}
//       {data && <Text>Data = {data}</Text>}
