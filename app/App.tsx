/** @format */

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/index";
import Routes from "@routes/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  );
}
