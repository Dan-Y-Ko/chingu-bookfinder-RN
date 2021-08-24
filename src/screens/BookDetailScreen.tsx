import React from "react";
import styled from "styled-components/native";
import { View, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

import type { BookListStackParamList } from "../navigation";

type BookDetailScreenRouteProp = NativeStackScreenProps<
  BookListStackParamList,
  "BookDetail"
>;

const ImageStyled = styled(Image)`
  width: 100%;
  height: 400px;
`;

const BookDetailWrapper = styled(View)`
  align-items: center;
`;

const AuthorText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const PublisherText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`;

const DescriptionText = styled(Text)`
  font-size: 18px;
  margin: 20px;
`;

const BookDetailScreen = ({ route }: BookDetailScreenRouteProp) => {
  const { image, author, publisher, description } = route.params;

  return (
    <>
      <ScrollView>
        <ImageStyled source={{ uri: image }} resizeMode="stretch" />
        <BookDetailWrapper>
          <AuthorText>{author}</AuthorText>
          <PublisherText>{publisher}</PublisherText>
          <DescriptionText>{description}</DescriptionText>
        </BookDetailWrapper>
      </ScrollView>
    </>
  );
};

export default BookDetailScreen;
