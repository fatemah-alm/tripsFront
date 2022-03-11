import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import { useState } from "react";
import { HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const TripDetails = (h) => {
  const { trip } = h.route.params;
  const [user, setUser] = useState(
    authStore.user ? authStore.user : { username: "anonymous" }
  );
  const navigation = useNavigation();
  console.log("!!!!", trip.owner);
  console.log("%%%%", authStore.user);
  const handleDelete = () => {
    tripStore.deleteTrip(trip._id, navigation);
  };
  return (
    <SafeAreaView style={styles.container}>
      <VStack style={styles.header}>
        <Image
          source={{ uri: `${baseUrl}${trip.image}` }}
          style={styles.img}
        ></Image>
        <VStack>
          <Text style={styles.name}>{trip.title}</Text>
          <Text
            style={styles.owner}
            onPress={() => navigation.navigate("UserProfile", { trip })}
          >
            By: {trip.owner.username}
          </Text>

          {/* <Text>By: {trip.owner}</Text> */}
          <Text style={styles.desc}>description: {trip.description}</Text>
        </VStack>
      </VStack>

      <SafeAreaView>
        {trip.owner.username === user.username ? (
          <Button
            m={3}
            colorScheme="amber"
            variant="outline"
            onPress={handleDelete}
            borderRadius={30}
            flex={1}
          >
            Delete
          </Button>
        ) : (
          false
        )}

        <Button
          m={3}
          colorScheme="amber"
          variant="outline"
          onPress={() => tripStore.updateTrip()}
          borderRadius={30}
          flex={1}
        >
          Update
        </Button>
        <Button
          m={3}
          colorScheme="amber"
          variant="outline"
          onPress={() => tripStore.likeTrip()}
          borderRadius={30}
          flex={1}
        >
          Like!
        </Button>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default observer(TripDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#aaa",
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  owner: {
    fontSize: 15,
    textTransform: "capitalize",
    color: "#aaa",
    textAlign: "center",
  },
  desc: {
    fontSize: 13,
    // fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  body: {
    flex: 4,
  },
});
