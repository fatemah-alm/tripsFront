import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../Profile";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import AddTrip from "../AddTrip";
import EditProfile from "../EditProfile";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0A111F",
          },
          headerTintColor: "#E5E5E5",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0A111F",
          },
          headerTintColor: "#E5E5E5",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
