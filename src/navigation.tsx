import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookListScreen from "./screens/BookListScreen";
import BookDetailScreen from "./screens/BookDetailScreen";

export type BookListStackParamList = {
  Home: undefined;
  BookDetail: {
    title: string;
    image: string;
    author: string;
    publisher: string;
    description: string;
  };
};

// create container navigation in case app needs authentication or onboarding before proceeding to main app
const RootStack = (): JSX.Element => (
  <NavigationContainer>
    <BookListNavigator />
  </NavigationContainer>
);

const BookListStack = createNativeStackNavigator<BookListStackParamList>();

const BookListNavigator = (): JSX.Element => (
  <BookListStack.Navigator initialRouteName="Home">
    <BookListStack.Screen
      name="Home"
      component={BookListScreen}
      options={{
        headerShown: false,
        gestureEnabled: false,
        animation: "fade",
      }}
    />
    <BookListStack.Screen
      name="BookDetail"
      component={BookDetailScreen}
      options={({ route }) => ({
        title: route.params.title,
        gestureEnabled: false,
        animation: "fade",
      })}
    />
  </BookListStack.Navigator>
);

export default RootStack;
