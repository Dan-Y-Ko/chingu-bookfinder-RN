import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-elements";

const BookListScreen = () => {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=pendragon"
      );

      setBooks(result.data.items);
    };

    fetchData();
  }, []);

  console.log(books);

  const renderBook = ({ item }: any) => <Text>{item.id}</Text>;

  return (
    <View>
      <Text>{books[1].id}</Text>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookListScreen;
