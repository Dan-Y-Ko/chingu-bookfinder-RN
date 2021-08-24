import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";

import Book from "../components/Book";

const BookListViewContainer = styled(View)`
  margin-bottom: 70px;
`;

const SearchBarStyled = styled(Searchbar)`
  margin: 10px;
`;

const BookListScreen = () => {
  const [books, setBooks] = useState<any>([]);
  const [searchText, setsearchText] = useState("");

  const fetchData = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
    );

    setBooks(result.data.items);
  };

  const updateSearch = (text: string) => {
    setsearchText(text);
  };

  const renderBook = ({ item: { volumeInfo } }: any) => {
    if (!volumeInfo.imageLinks) {
      return null;
    }

    return (
      <Book
        image={volumeInfo.imageLinks.thumbnail}
        title={volumeInfo.title}
        author={volumeInfo.authors[0]}
        publisher={volumeInfo.publisher}
      />
    );
  };

  return (
    <BookListViewContainer>
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
    </BookListViewContainer>
  );
};

export default BookListScreen;
