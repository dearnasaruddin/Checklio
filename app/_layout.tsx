import { Stack } from "expo-router";
import "../global.css"
import { useFonts } from 'expo-font'

export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  })

  if (!fontsLoaded) return null

  return <Stack screenOptions={{ headerShown: false }} />;
}
