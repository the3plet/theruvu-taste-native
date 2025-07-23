import { useColorScheme, View } from "react-native";
import "./global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  const theme = useColorScheme();
  return (
    <View className={theme === "dark" ? "dark flex-1" : "flex-1"}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}
