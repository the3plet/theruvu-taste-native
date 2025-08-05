import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, useRouter } from "expo-router";
import useAuthStore from "@/store/auth";

const _Layout = () => {
  const router = useRouter();
  const user = useAuthStore.getState().user;
  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  }, [user]);
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <Slot />
    </SafeAreaView>
  );
};

export default _Layout;
