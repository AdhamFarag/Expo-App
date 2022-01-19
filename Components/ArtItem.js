import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArtItem = ({ data, navigation }) => {
  //const navigation = useNavigation();

  const GoToDetailsScreen = () => {
    console.log("going to details");
    navigation.navigate("DetailsOfItem");
  };

  return (
    <TouchableOpacity onPress={GoToDetailsScreen}>
      <View style={[styles.item, styles.shadowProp]}>
        <Image
          style={styles.image}
          source={{
            uri: `${data.primaryImage}`,
          }}
        />
        <Text numberOfLines={3} style={styles.itemText}>
          {data.title || "unknown artist"}
        </Text>
        <Text style={styles.Author}>{data.artistAlphaSort}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 150,
    height: 250,
    backgroundColor: "#E8EAED",
    padding: 15,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    borderColor: "lightgray",
    borderWidth: 0.5,
  },
  image: {
    width: "90%",
    height: "50%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
  },
  itemText: {
    alignItems: "center", //Centered vertically
    height: "80%",
  },

  Author: {
    textAlign: "right",
    justifyContent: "center",
    alignSelf: "flex-end",
    bottom: 10,
    right: 10,
    fontSize: 10,
    fontWeight: "200",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default ArtItem;
