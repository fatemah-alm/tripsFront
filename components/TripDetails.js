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
            onPress={() =>
              navigation.navigate("UserProfile", { user: trip.owner })
            }
          >
            By: {trip.owner.username}
          </Text>
          <Text style={styles.desc}>{trip.description}</Text>
        </VStack>
      </VStack>
      {/* <View style={styles.body}>
        <ProductList products={shop.products} />
      </View> */}
    </SafeAreaView>
  );
};

export default observer(TripDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#14213D",
  },
  header: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
  img: {
    width: "100%",
    height: 200,
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
