import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import tripStore from "../stores/tripStore";
import Trip from "./Trip";
import { observer } from "mobx-react";

const TripsList = () => {
  const tripList = tripStore.trips.map((trip) => {
    return <Trip trip={trip} key={trip._id} />;
  });
  console.log(tripList);
  return (
    <View style={styles.container}>
      {/* <Header title="Trips" /> */}
      <ScrollView>
        <View style={styles.scroll}>{tripList}</View>
      </ScrollView>
    </View>
  );
};

export default observer(TripsList);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  scroll: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
