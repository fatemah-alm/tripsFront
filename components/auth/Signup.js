import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const Signup = ({ navigation }) => {
  if (authStore.user) navigation.navigate("Profile");
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = () => {
    authStore.signup(user, navigation);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <VStack style={{ width: "100%", padding: 10 }}>
        <Text style={[styles.text, styles.title]}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#787B82"
          value={user.firstName}
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#787B82"
          value={user.lastName}
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          email
          placeholderTextColor="#787B82"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <TextInput
          style={styles.input}
          placeholder=" Username"
          placeholderTextColor="#787B82"
          value={user.username}
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#787B82"
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Button
          m={3}
          colorScheme="amber"
          onPress={handleSubmit}
          borderRadius={30}
        >
          Register
        </Button>
        <HStack justifyContent="center">
          <Text style={styles.text}> Have account already ?</Text>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.link}> Login</Text>
          </Pressable>
        </HStack>
      </VStack>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14213D",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
  link: {
    color: "#FCA311",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    textDecorationStyle: "solid",
    textDecorationColor: "#FCA311",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#E5E5E5",
    color: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    margin: 10,
  },
});
