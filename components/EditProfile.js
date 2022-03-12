import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { VStack, Button, HStack } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react-lite";
import { baseUrl } from "../stores/instance";

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(authStore.user);

  const [profile, setProfile] = useState(
    profileStore.profiles.find((profile) => profile._id == user.profile)
  );
  const [updatedProfile, setUpdatedProfile] = useState({
    bio: profile.bio,
  });
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const handleSubmit = () => {
    profileStore.updateProfile(updatedProfile, image, profile._id, navigation);
  };
  return (
    <VStack style={styles.container}>
      <ScrollView style={{ margin: 2 }}>
        <Text style={[styles.text, styles.label]}>bio</Text>
        <TextInput
          style={styles.inputLg}
          multiline
          numberOfLines={4}
          placeholder="bio"
          placeholderTextColor="#787B82"
          value={updatedProfile.bio || profile.bio}
          onChangeText={(bio) => setUpdatedProfile({ ...updatedProfile, bio })}
        />
        <View
          style={{
            paddingHorizontal: 12,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={{
                width: "100%",
                height: "70%",
                borderRadius: 15,
                margin: 0,
              }}
            />
          ) : (
            <Image
              source={{ uri: baseUrl + profile.image }}
              style={{
                width: "100%",
                height: "70%",
                borderRadius: 5,
                margin: 0,
              }}
            />
          )}
          <Button
            my={3}
            colorScheme="amber"
            onPress={pickImage}
            variant="outline"
            size="sm"
          >
            Select Image
          </Button>
        </View>
        <HStack>
          <Button m={3} colorScheme="amber" onPress={handleSubmit} flex={1}>
            Update
          </Button>
          <Button
            m={3}
            colorScheme="amber"
            variant="outline"
            onPress={() => navigation.goBack()}
            flex={1}
          >
            cancel
          </Button>
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default observer(EditProfile);

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
    borderRadius: 5,
    paddingHorizontal: 12,
    margin: 12,
  },
  inputLg: {
    minHeight: 100,
    borderColor: "#E5E5E5",
    color: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 20,
    margin: 12,
  },
});
