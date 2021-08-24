import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import Book from "../components/Book";

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

  const renderBook = ({ item }: any) => (
    <Book
      image={item.volumeInfo.imageLinks.thumbnail}
      title={item.volumeInfo.title}
      author={item.volumeInfo.authors[0]}
      publisher={item.volumeInfo.publisher}
    />
  );

  return (
    <View>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookListScreen;
