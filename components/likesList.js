import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";

const LikesList = () => {
  const likeList = tripStore.likes.map((like) => {
    return <like like={like} key={like._id} />;
  });
  console.log(likeList);
  return (
    <View style={styles.container}>
      {/* <Header title="Likes" /> */}
      <ScrollView>
        <View style={styles.scroll}>{likeList}</View>
      </ScrollView>
    </View>
  );
};

export default observer(LikesList);

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
