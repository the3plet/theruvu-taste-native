import { useColorScheme, View } from "react-native";
import { Slot, Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        },
      }}
    >
      <Stack.Screen
        name="index"
        
      />

      {/* Tabs group (no animation between tabs) */}
      <Stack.Screen
        name="(tabs)"
        options={{
          animation: "slide_from_bottom", // This animation happens ONCE when coming from Get Started
        }}
      />

      {/* Auth group */}
      <Stack.Screen name="(auth)" options={{
        animation:'fade'
      }}/>
    </Stack>
  );
}



