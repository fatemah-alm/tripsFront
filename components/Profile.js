import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import profileStore from "../stores/profileStore";
import { observer } from "mobx-react";

const Profile = ({ navigation, user }) => {
  // const { user } = route.params;

  const [owner, setOwner] = useState(user ? user : authStore.user);
  const profile = profileStore.profiles.find(
    (profile) => profile._id === owner.profile
  );
  if (!authStore.user) navigation.navigate("Signin");
  return (
    <VStack style={styles.container}>
      <SafeAreaView />
      <VStack style={styles.profileInfo}>
        <Image
          source={{
            uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.profileImg}
        />
        <Text style={[styles.text, styles.title]}>{owner.username}</Text>
        {/* <Text style={styles.text}>{profile.trips.length} Trips</Text> */}
        <Text style={styles.text}>{profile.bio}</Text>
        <HStack justifyContent="center" mx={2}>
          <Button
            colorScheme="amber"
            m={1}
            flex={1}
            onPress={() => navigation.navigate("EditProfile")}
          >
            Edit Profile
          </Button>
          <Button
            colorScheme="amber"
            m={1}
            flex={1}
            onPress={() => navigation.navigate("AddTrip")}
          >
            Add Trip
          </Button>
          <Button
            colorScheme="amber"
            m={1}
            flex={1}
            onPress={() => authStore.signout(navigation)}
          >
            signout
          </Button>
        </HStack>
      </VStack>
      {/* <Text>{profile.image}</Text> */}
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
});
