import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-native-paper";

import Calculator from "./Calculator";

function App() {
  return (
    <Provider>
      <StatusBar style="light" />
      <Calculator />
    </Provider>
  );
}

export default App;
