import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Images = props => {
  const { source } = props;
  return (
    <View>
      <Image
        source={{ uri: source.download_url }}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export default Images;
