import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "native-base";
import { HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";

const TripDetails = ({ route }) => {
  const { trip } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <VStack style={styles.header}>
        <Image
          source={{ uri: `${baseUrl}${trip.image}` }}
          style={styles.img}
        ></Image>
        <VStack>
          <Text style={styles.name}>{trip.title}</Text>
          <Text style={styles.owner}>By: {trip.owner.username}</Text>
          <Text style={styles.desc}>{trip.description}</Text>
        </VStack>
      </VStack>
      {/* <View style={styles.body}>
        <ProductList products={shop.products} />
      </View> */}
    </SafeAreaView>

    // <SafeAreaView>
    /* <Text>TripDetails</Text>
      <Button
        m={3}
        colorScheme="amber"
        variant="outline"
        onPress={() => tripStore.deleteTrip()}
        borderRadius={30}
        flex={1}
      >
        Delete
      </Button>

    </SafeAreaView> */

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
    </SafeAreaView>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "#fff",
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
