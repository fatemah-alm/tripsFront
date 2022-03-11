import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddTripBtn = ({ color, size }) => {
  return <Feather name="plus-square" size={size} color={color} />;
};

export default AddTripBtn;

const styles = StyleSheet.create({});
