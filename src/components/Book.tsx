import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card, Text, Button } from "react-native-paper";

interface BookProps {
  image: string;
  title: string;
  author: string;
  publisher: string;
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

const Book = ({ image, title, author, publisher }: BookProps) => (
  <CardParent>
    <CardContainer>
      <BookRowWrapper>
        <ImageStyled source={{ uri: image }} resizeMode="cover" />
        <DescriptionColumnWrapper>
          <TitleText>{title}</TitleText>
          <Text>By: {author}</Text>
          <Text>Published By: {publisher ?? "Unknown"}</Text>
          <ButtonText mode="contained">View Details</ButtonText>
        </DescriptionColumnWrapper>
      </BookRowWrapper>
    </CardContainer>
  </CardParent>
);

export default Book;
