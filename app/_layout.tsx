import { useColorScheme, View } from "react-native";
import { router, Slot, Stack, useSegments } from "expo-router";
import "./globals.css";
import useAuthStore from "@/store/auth";
import { useEffect } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const user = useAuthStore.getState().user;

  useEffect(() => {
    if (!(segments.length > 0)) return;
    if (user) {
      router.replace("/(tabs)/home");
    } else router.replace("/");
  },[user]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        },
      }}
    >
      <Stack.Screen name="index" /> 
      {/* Tabs group (no animation between tabs) */}
      <Stack.Screen
        name="(tabs)"
        options={{
          animation: "slide_from_bottom", // This animation happens ONCE when coming from Get Started
        }}
      />

      {/* Auth group */}
      <Stack.Screen
        name="(auth)"
        options={{
          animation: "fade",
        }}
      />
    </Stack>
  );
}
