import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../Profile";
import Home from "../Home";
import TripDetails from "../TripDetails";
import UserProfile from "../UserProfile";
import EditTrip from "../EditTrip";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Trip"
        component={TripDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditTrip"
        component={EditTrip}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
