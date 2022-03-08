import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import authStore from "../stores/authStore";

const Profile = ({ navigation }) => {
  if (!authStore.user) navigation.navigate("Signin");
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button onPress={() => authStore.signout(navigation)}>signout</Button>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
