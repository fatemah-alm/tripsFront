import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import profileStore from "../stores/profileStore";

const Home = () => {
  console.log(profileStore.profiles);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
