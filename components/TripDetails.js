import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import tripStore from "../stores/tripStore";

const TripDetails = () => {
  return (
    <SafeAreaView>
      <Text>TripDetails</Text>
      <Button
        m={3}
        colorScheme="amber"
        variant="outline"
        onPress={() => tripStore.deleteTrip()}
        borderRadius={30}
        flex={1}
      >
        Delete
      </Button>
      <Button
        m={3}
        colorScheme="amber"
        variant="outline"
        onPress={() => tripStore.updateTrip()}
        borderRadius={30}
        flex={1}
      >
        Update
      </Button>
    </SafeAreaView>
  );
};

export default TripDetails;

const styles = StyleSheet.create({});
