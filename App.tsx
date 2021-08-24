import React from "react";
import { StatusBar } from "expo-status-bar";

import SafeArea from "./src/utility/SafeAreaBase";
import RootStack from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeArea>
        <RootStack />
      </SafeArea>
    </>
  );
}
