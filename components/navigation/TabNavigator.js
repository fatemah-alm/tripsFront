import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import ProfileNavigator from "./ProfileNavigator";
import HomeNavigator from "./HomeNavigator";
import AddTrip from "../AddTrip";
import AddTripBtn from "../Buttons/AddTripBtn";

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
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
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
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
