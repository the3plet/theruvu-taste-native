import { Stack } from "expo-router";
import { Text } from "react-native";


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text className="text-yellow-500">
        Error
      </Text>
    </>
  );
}


