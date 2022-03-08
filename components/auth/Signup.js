import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <VStack style={{ width: "100%", padding: 10 }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Sign up
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
            margin: 10,
          }}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
            margin: 10,
          }}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
            margin: 10,
          }}
          placeholder="Email"
          email
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
            margin: 10,
          }}
          placeholder=" Username"
          value={user.username}
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
            margin: 10,
          }}
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Button
          m={3}
          colorScheme="blue"
          onPress={handleSubmit}
          borderRadius={30}
        >
          signup
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
