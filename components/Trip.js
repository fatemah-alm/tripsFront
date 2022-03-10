import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { VStack } from "native-base";
import { baseUrl } from "../stores/instance";
import { useNavigation } from "@react-navigation/native";
const Trip = ({ trip }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.col}
      onPress={() => navigation.navigate("Trip", { trip: trip })}
    >
      <VStack style={styles.card}>
        <Image
          source={{ uri: baseUrl + trip.image }}
          style={styles.img}
        ></Image>
        <Text style={styles.name}>{trip.title}</Text>
      </VStack>
    </Pressable>
  );
};

export default Trip;

const styles = StyleSheet.create({
  col: {
    width: "50%",
    marginTop: 0,
    alignItems: "center",
    padding: 5,
  },
  card: {
    width: "90%",
    padding: 0,
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
    textAlign: "center",
    width: "100%",
    marginTop: 5,
  },
  img: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 150,
    resizeMode: "cover",
    overflow: "hidden",
  },
});
