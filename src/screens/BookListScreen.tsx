import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";

import Book from "../components/Book";

const SearchBarStyled = styled(Searchbar)`
  margin: 10px;
`;

const BookListScreen = () => {
  const [books, setBooks] = useState<any>([]);
  const [searchText, setsearchText] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios.get(
  //         "https://www.googleapis.com/books/v1/volumes?q=pendragon"
  //       );

  //       setBooks(result.data.items);
  //     };

  //     fetchData();
  //   }, []);

  const fetchData = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
    );

    setBooks(result.data.items);
  };

  //   const updateSearch = async () => {
  //     const result = await axios.get(
  //       "https://www.googleapis.com/books/v1/volumes?q=pendragon"
  //     );

  //     setBooks(result.data.items);
  //   };

  const updateSearch = (text: string) => {
    setsearchText(text);
  };

  const renderBook = ({ item }: any) => (
    <Book
      image={item.volumeInfo.imageLinks.thumbnail}
      title={item.volumeInfo.title}
      author={item.volumeInfo.authors[0]}
      publisher={item.volumeInfo.publisher}
    />
  );

  return (
    <View style={{ marginBottom: 70 }}>
      <SearchBarStyled
        placeholder="Search book..."
        onChangeText={updateSearch}
        value={searchText}
        onSubmitEditing={fetchData}
      />
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookListScreen;
