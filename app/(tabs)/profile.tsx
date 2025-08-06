import useAuthStore from "@/store/auth";
import { router } from "expo-router";
import React from "react";
import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from 'expo-haptics';

const profile = () => {

   const handleSignout = async () => {
    // Trigger haptic feedback (light tap)
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Vibration.vibrate(50); // ms
    console.log('vibrarte')

    // Clear user state
    useAuthStore.getState().signout();

    // Navigate
    router.replace('/(auth)');
  };
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        className="bg-black"
        onPress={handleSignout}
      >
        <Text className="text-white">Signout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default profile;
