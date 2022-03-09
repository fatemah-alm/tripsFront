import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddTripBtn = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("MyProfile", { screen: "AddTrip" });
  };
  return (
    <Pressable onPress={handlePress}>
      <Feather
        name="plus-square"
        size={24}
        color="black"
        style={{ marginRight: 12 }}
      />
    </Pressable>
  );
};

export default AddTripBtn;

const styles = StyleSheet.create({});
