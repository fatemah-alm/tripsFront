import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";
import profileStore from "../stores/profileStore";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import Trip from "./Trip";

const Profile = ({ route }) => {
  const { trip } = route.params;
  const tripList = tripStore.trips
    .filter((tripa) => trip.owner._id === tripa.owner._id)
    .map((trip) => {
      return <Trip trip={trip} key={trip._id} />;
    });

  const profile = profileStore.profiles.find(
    (profile) => profile._id == trip.owner.profile
  );

  if (profileStore.profiles === null) return <Text>Loading...</Text>;
  if (!profile) return <Text>Loading...</Text>;

  return (
    <VStack style={styles.container}>
      <SafeAreaView />

      <VStack style={styles.profileInfo}>
        <Image
          source={{
            uri: profile.image
              ? baseUrl + profile.image
              : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.profileImg}
        />
        <Text style={[styles.text, styles.title]}>{trip.owner.username}</Text>
        <Text style={styles.text}>{profile.trips.length} Trips</Text>
        <Text style={styles.text}>{profile.bio}</Text>
        <HStack justifyContent="center" mx={2}></HStack>
      </VStack>
      <View style={styles.scroll}>{tripList}</View>

      <View flex={1}></View>
    </VStack>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14213D",
    flex: 1,
  },
  profileInfo: {
    width: "100%",
    alignItems: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  text: {
    color: "#FFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scroll: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
