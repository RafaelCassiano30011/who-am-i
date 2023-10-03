/** @format */

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/index";
import Routes from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent"  translucent/>
      {fontsLoaded ? <Routes /> : <></>}
    </ThemeProvider>
  );
}
