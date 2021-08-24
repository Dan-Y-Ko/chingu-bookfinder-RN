import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, View, Text } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";

import Book from "../components/Book";
import useFetch from "../hooks/useFetch";

const BookListViewContainer = styled(View)`
  margin-bottom: 70px;
`;

const SearchBarStyled = styled(Searchbar)`
  margin: 10px;
`;

const ResultsTextWrapper = styled(View)`
  align-items: center;
`;

const BookListScreen = () => {
  const [searchText, setSearchText] = useState("");

  const { fetchData, response, loading, error } = useFetch();

  const handleSearch = async () => {
    await fetchData(`books/v1/volumes?q=${searchText}`);
  };

  const updateSearch = (text: string) => {
    setSearchText(text);
  };

  const renderBook = ({ item: { volumeInfo } }: any) => {
    if (!volumeInfo.imageLinks || !volumeInfo.authors) {
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
        onSubmitEditing={handleSearch}
      />
      {loading && <ActivityIndicator animating />}
      {error && (
        <ResultsTextWrapper>
          <Text>Something went wrong, try again</Text>
        </ResultsTextWrapper>
      )}
      {!error && !loading && !response && (
        <ResultsTextWrapper>
          <Text>No Results Found</Text>
        </ResultsTextWrapper>
      )}
      {!error && !loading && response && (
        <FlatList
          data={response}
          renderItem={renderBook}
          keyExtractor={(item) => item.id}
        />
      )}
    </BookListViewContainer>
  );
};

export default BookListScreen;
