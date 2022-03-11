import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import profileStore from "../stores/profileStore";
import { observer } from "mobx-react";
import TripsList from "./TripsList";

const Profile = ({ navigation, route, user }) => {
  // const user = route.params.user;
  // console.log("user", user);

  const [owner, setOwner] = useState(user ? user : authStore.user);
  console.log("owner", owner);

  const profile = profileStore.profiles.find(
    (profile) => profile._id == owner.profile._id
  );

  console.log(profile);

  if (profileStore.profiles === null) return <Text>Loading...</Text>;
  if (!profile) return <Text>Loading...</Text>;
  if (!authStore.user) navigation.navigate("Signin");
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <Button
        colorScheme="amber"
        variant="ghost"
        mr={3}
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
          {owner._id === authStore.user._id && (
            <Button
              colorScheme="amber"
              m={1}
              flex={1}
              onPress={() => navigation.navigate("EditProfile")}
            >
              Edit Profile
            </Button>
          )}
        </HStack>
      </VStack>
      {/* <Text>{profile.image}</Text> */}
      <View flex={1}>
        <TripsList owner={profile} />
      </View>
    </ScrollView>
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
    borderBottomColor: "#fff5",
    borderBottomWidth: 0.5,
    marginBottom: 10,
    padding: 10,
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
