import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import profileStore from "../stores/profileStore";
import { observer } from "mobx-react";

const Profile = ({ navigation, user }) => {
  const [owner, setOwner] = useState(user ? user : authStore.user);
  const [profile, setProfile] = useState(
    profileStore.profiles.find((profile) => profile._id === owner.profile)
  );
  console.log("first", profile);
  if (profileStore.profiles === null) return <Text>Loading...</Text>;
  if (!profile) return <Text>Loading...</Text>;
  if (!authStore.user) navigation.navigate("Signin");
  // console.log(profile.image);
  return (
    <VStack style={styles.container}>
      <SafeAreaView />

      <Button
        colorScheme="amber"
        variant="ghost"
        m={3}
        alignSelf="flex-end"
        onPress={() => authStore.signout(navigation)}
      >
        Logout
      </Button>
      <VStack style={styles.profileInfo}>
        <Image
          source={{
            uri: profile.image
              ? baseUrl + profile.image
              : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.profileImg}
        />
        <Text style={[styles.text, styles.title]}>{owner.username}</Text>
        <Text style={styles.text}>{profile.trips.length} Trips</Text>
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
        </HStack>
      </VStack>
      {/* <Text>{profile.image}</Text> */}
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
});
