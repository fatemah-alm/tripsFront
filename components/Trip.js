import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";
import { useNavigation } from "@react-navigation/native";
import profileStore from "../stores/profileStore";
const Trip = ({ trip }) => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(
      profileStore.profiles.find(
        (profile) => profile.owner._id === trip.owner._id
      )
    );
  }, [profile]);

  if (profile === null) {
    return <Text>Loading..</Text>;
  }

  return (
    <Pressable
      style={styles.col}
      onPress={() => navigation.navigate("Trip", { trip: trip })}
    >
      <VStack style={styles.card}>
        <Image source={{ uri: baseUrl + trip.image }} style={styles.img} />
        <HStack style={styles.info}>
          <Image
            source={{
              uri: profile.image
                ? baseUrl + profile.image
                : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
            }}
            style={styles.infoImg}
          />
          <Text style={styles.name}>{trip.title}</Text>
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default Trip;

const styles = StyleSheet.create({
  col: {
    width: "50%",
    marginTop: 0,
    alignItems: "center",
    padding: 5,
  },
  card: {
    width: "90%",
    padding: 0,
  },
  name: {
    fontSize: 12,
    textTransform: "capitalize",
    width: "100%",
    overflow: "hidden",
    color: "#E5E5E5",
  },
  img: {
    width: "100%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    resizeMode: "cover",
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#fff5",
  },
  info: {
    padding: 5,
    alignItems: "center",
  },
  infoImg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
});
