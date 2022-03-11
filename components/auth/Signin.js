import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  if (authStore.user) navigation.replace("Profile");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <VStack style={{ width: "100%", padding: 10 }}>
        <Text style={[styles.text, styles.title]}>Login</Text>
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
          placeholderTextColor="#787B82"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Button
          m={3}
          colorScheme="amber"
          onPress={handleSubmit}
          borderRadius={30}
        >
          Login
        </Button>

        <HStack justifyContent="center">
          <Text style={styles.text}> Not a user ?</Text>
          <Pressable onPress={() => navigation.replace("Signup")}>
            <Text style={styles.link}> Register</Text>
          </Pressable>
        </HStack>
      </VStack>
    </View>
  );
};

export default observer(Signin);

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
