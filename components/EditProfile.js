import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { VStack, Button, HStack } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(authStore.user);
  const [profile, setProfile] = useState(
    profileStore.profiles.find((profile) => profile._id === user.profile)
  );

  const handleSubmit = () => {
    profileStore.updateProfile(profile, profile._id, navigation);
  };
  return (
    <VStack style={styles.container}>
      <Text style={[styles.text, styles.label]}>username</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#787B82"
        value={user.username}
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <Text style={[styles.text, styles.label]}>bio</Text>
      <TextInput
        style={styles.inputLg}
        multiline
        numberOfLines={4}
        placeholder="bio"
        placeholderTextColor="#787B82"
        value={profile.bio}
        onChangeText={(bio) => setProfile({ ...profile, bio })}
      />
      <HStack>
        <Button
          m={3}
          colorScheme="amber"
          onPress={handleSubmit}
          borderRadius={30}
          flex={1}
        >
          Update
        </Button>
        <Button
          m={3}
          colorScheme="amber"
          variant="outline"
          onPress={() => navigation.goBack()}
          borderRadius={30}
          flex={1}
        >
          cancel
        </Button>
      </HStack>
    </VStack>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14213D",
    flex: 1,
  },
  text: {
    color: "#FCA311",
  },
  link: {
    color: "#FCA311",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 12,
    marginTop: 12,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#E5E5E5",
    color: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    margin: 12,
  },
  inputLg: {
    minHeight: 100,
    borderColor: "#E5E5E5",
    color: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 20,
    margin: 12,
  },
});
