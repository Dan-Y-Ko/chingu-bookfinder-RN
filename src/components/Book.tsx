import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Button } from "react-native-paper";

interface BookProps {
  image: string;
  title: string;
  author: string;
  publisher: string;
}

const Book = ({ image, title, author, publisher }: BookProps) => (
  <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
    <Card style={styles.cardContainer}>
      <View style={styles.bookRowWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.descriptionColumnWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text>By: {author}</Text>
          <Text>Published By: {publisher}</Text>
          <Button
            style={styles.button}
            labelStyle={{ fontSize: 12 }}
            mode="contained"
          >
            View Details
          </Button>
        </View>
      </View>
    </Card>
  </View>
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
    width: 150,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
  },
});

export default Book;
