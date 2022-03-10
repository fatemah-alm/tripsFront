import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TripsList from "./TripsList";

const Home = () => {
  return (
    <SafeAreaView>
      <TripsList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
