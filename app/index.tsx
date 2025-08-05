import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GettingStarted from "@/assets/images/getstarted.png";
import { router } from "expo-router";
import GetStartedModel from "@/components/GetStartedModel";

export default function Index() {
  return (
    <View className="flex-1">
      <ImageBackground source={GettingStarted} className="w-full h-full ">
        <View className="absolute w-full bottom-14 justify-center items-center">
          <Text className=" text-4xl font-semibold z-10 text-gray-300 ">
            Theruvu Taste
          </Text>
          <Text className=" text-5xl font-bold z-10 text-black/95 ">
            Hidden Gem Spot
          </Text>
          <Text className=" text-4xl font-semibold z-10 text-orange-300 ">
            Near You
          </Text>
          <GetStartedModel/>
          {/* <TouchableOpacity className="z-10 items-center w-11/12 bg-black py-6 mt-6 rounded-full" onPress={()=>router.push('/(tabs)')}>
            <Text className="text-white text-2xl">Get Started</Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
  );
}
