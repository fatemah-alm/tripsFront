import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import ProfileNavigator from "./ProfileNavigator";
import HomeNavigator from "./HomeNavigator";
import AddTrip from "../AddTrip";
import AddTripBtn from "../Buttons/AddTripBtn";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0A111F",
          padding: 0,
        },
        tabBarActiveTintColor: "#FCA311",
        tabBarInactiveTintColor: "#E5E5E5",
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarItemStyle: {
            backgroundColor: "#FCA311",
            borderRadius: 50,
          },
          tabBarIcon: ({ color, size }) => (
            <AddTripBtn color={color} size={size} />
          ),
          tabBarActiveTintColor: "#0A111F",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0A111F",
          },
          headerTintColor: "#E5E5E5",
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
