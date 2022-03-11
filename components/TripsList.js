import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tripStore from "../stores/tripStore";
import Trip from "./Trip";
import { observer } from "mobx-react";

const TripsList = ({ owner }) => {
  const [tripList, setTripList] = useState(
    tripStore.trips.map((trip) => {
      return <Trip trip={trip} key={trip._id} />;
    })
  );

  useEffect(async () => {
    if (owner) {
      await setTripList(
        tripStore.trips
          .filter((trip) => trip.owner._id === owner.owner._id)
          .map((trip) => {
            return <Trip trip={trip} key={trip._id} />;
          })
      );
    } else {
      await setTripList(
        tripStore.trips.map((trip) => {
          return <Trip trip={trip} key={trip._id} />;
        })
      );
    }
  }, []);

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
