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
import tripStore from "../stores/tripStore";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react-lite";
import { baseUrl } from "../stores/instance";

const EditTrip = ({ navigation, route }) => {
  const { trip } = route.params;
  const [user, setUser] = useState(authStore.user);

  const [updatedTrip, setUpdatedTrip] = useState({
    description: trip.description,
    title: trip.title,
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
    console.log(">>><<<<<", updatedTrip);
    tripStore.updateTrip(updatedTrip, image, trip._id, navigation);
  };
  return (
    <VStack style={styles.container}>
      <ScrollView style={{ margin: 2 }}>
        <Text style={[styles.text, styles.label]}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#787B82"
          value={updatedTrip.title || trip.title}
          onChangeText={(title) => setUpdatedTrip({ ...trip, title })}
        />
        <Text style={[styles.text, styles.label]}>description</Text>
        <TextInput
          style={styles.inputLg}
          multiline
          numberOfLines={4}
          placeholder="description"
          placeholderTextColor="#787B82"
          value={updatedTrip.description || trip.description}
          onChangeText={(description) =>
            setUpdatedTrip({ ...updatedTrip, description })
          }
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
              source={{ uri: baseUrl + trip.image }}
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

export default observer(EditTrip);

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
