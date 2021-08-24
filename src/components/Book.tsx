import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Image, Text, Button } from "react-native-elements";

interface BookProps {
  image: string;
  title: string;
  author: string;
  publisher: string;
}

const Book = ({ image, title, author, publisher }: BookProps) => (
  <Card containerStyle={styles.cardContainer}>
    <View style={styles.bookRowWrapper}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.descriptionColumnWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text>By: {author}</Text>
        <Text>Published By: {publisher}</Text>
        <Button buttonStyle={styles.button} title="View Details" />
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
  },
  bookRowWrapper: {
    flexDirection: "row",
  },
  descriptionColumnWrapper: {
    width: "55%",
    flexWrap: "wrap",
    marginLeft: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 200,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    width: 120,
    height: 40,
    marginTop: 10,
  },
});

export default Book;
