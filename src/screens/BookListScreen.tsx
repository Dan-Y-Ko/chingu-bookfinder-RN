import axios from "axios";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

const BookListScreen = () => {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=pendragon"
      );

      setBooks(result.data);
    };

    fetchData();
  }, []);

  console.log(books);

  return (
    <View>
      <Text h1>{books?.title}</Text>
    </View>
  );
};

export default BookListScreen;
