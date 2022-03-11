import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TripsList from "./TripsList";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { Button, HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";

const Home = ({ navigation }) => {
  return (
    <VStack style={styles.container}>
      <ScrollView>
        <SafeAreaView />
        {authStore.user ? (
          <HStack style={styles.header}>
            <HStack style={styles.info}>
              {/* <Image
                style={styles.img}
                source={{ uri: baseUrl + authStore.user.profile.image }}
              /> */}
              <VStack>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.name}>
                  {authStore.user.firstName} {authStore.user.lastName}
                </Text>
              </VStack>
            </HStack>
            <Button
              onPress={authStore.signout}
              variant="ghost"
              colorScheme="amber"
            >
              Logout
            </Button>
          </HStack>
        ) : (
          <HStack style={[styles.header, { justifyContent: "flex-end" }]}>
            <Button
              onPress={() => navigation.navigate("MyProfile")}
              variant="ghost"
              colorScheme="amber"
              alignSelf="flex-end"
            >
              Login / Register
            </Button>
          </HStack>
        )}
        <TripsList />
      </ScrollView>
    </VStack>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    width: "100%",
  },
  info: { alignItems: "center" },
  welcome: {
    fontSize: 25,
    color: "#E5E5E5",
  },
  name: {
    fontSize: 14,
    color: "#E5E5E590",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
});
