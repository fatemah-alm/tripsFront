import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../Profile";
import Signup from "../Signup";
import Signin from "../Signin";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
