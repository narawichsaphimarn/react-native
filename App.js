import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import Images from "./src/component/Images";
import { images } from "./src/tool/fetchImage";

export default function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    images(result => {
      setValue(result.result);
    });
  }, []);

  console.log("value :: ", value);

  let pic = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
  };

  return (
    <View style={styles.container}>
      {value.map((item, index) => {
        return <Images source={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
