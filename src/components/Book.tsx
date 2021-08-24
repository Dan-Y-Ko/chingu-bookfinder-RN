import React from "react";
import styled from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Text, Button } from "react-native-paper";

import type { BookListStackParamList } from "../navigation";

type BookListScreenNavigationProp = NativeStackNavigationProp<
  BookListStackParamList,
  "Home"
>;

interface BookProps {
  image: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
}

const CardParent = styled(View)`
  align-items: center;
`;

const CardContainer = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`;

const BookRowWrapper = styled(View)`
  flex-direction: row;
`;

const ImageStyled = styled(Image)`
  width: 150px;
  height: 200px;
`;

const DescriptionColumnWrapper = styled(View)`
  width: 55%;
  flex-wrap: wrap;
  margin-left: 5px;
  align-items: flex-start;
  justify-content: center;
`;

const TitleText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const ButtonText = styled(Button).attrs({
  labelStyle: {
    fontSize: 12,
  },
})`
  width: 150px;
  height: 40px;
  margin-top: 10px;
  justify-content: center;
`;

const Book = ({ image, title, author, publisher, description }: BookProps) => {
  const navigation = useNavigation<BookListScreenNavigationProp>();

  return (
    <CardParent>
      <CardContainer>
        <BookRowWrapper>
          <ImageStyled source={{ uri: image }} resizeMode="cover" />
          <DescriptionColumnWrapper>
            <TitleText>{title}</TitleText>
            <Text>By: {author}</Text>
            <Text>Published By: {publisher ?? "Unknown"}</Text>
            <ButtonText
              mode="contained"
              onPress={() =>
                navigation.navigate("BookDetail", {
                  title,
                  image,
                  author,
                  publisher,
                  description,
                })
              }
            >
              View Details
            </ButtonText>
          </DescriptionColumnWrapper>
        </BookRowWrapper>
      </CardContainer>
    </CardParent>
  );
};

export default Book;
