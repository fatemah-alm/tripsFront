import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { VStack, Button, HStack } from "native-base";
import tripStore from "../stores/tripStore";
import profileStore from "../stores/profileStore";
import authStore from "../stores/authStore";

const AddTrip = ({ navigation }) => {
  const profile = profileStore.profiles.find(
    (profile) => profile._id === authStore.user.profile
  );
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    owner: "",
  });
  const handleSubmit = () => {
    tripStore.createTrip(trip, profile._id, navigation);
  };
  return (
    <VStack style={styles.container}>
      <Text style={[styles.text, styles.label]}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#787B82"
        value={trip.title}
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <Text style={[styles.text, styles.label]}>description</Text>
      <TextInput
        style={styles.inputLg}
        multiline
        numberOfLines={4}
        placeholder="Description"
        placeholderTextColor="#787B82"
        value={trip.description}
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <HStack>
        <Button
          m={3}
          colorScheme="amber"
          onPress={handleSubmit}
          borderRadius={30}
          flex={1}
        >
          Add
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

export default AddTrip;

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
