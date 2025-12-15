import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { foodspotService } from "@/lib/services/foodspotService";
import { FoodSpot } from "@/constant/types/home";
import { Feather } from "@expo/vector-icons";
import FoodItems from "@/components/home/FoodItems";

const { height } = Dimensions.get("screen");

const FoodSpotDetail = () => {
  const [details, setDetails] = useState<FoodSpot>();

  const { id } = useLocalSearchParams<{ id: string }>();

  const getFoodSpotById = async () => {
    try {
      const response = await foodspotService.foodspotbyid(id);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoodSpotById();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: details?.imageUrl }}
          className=""
          style={{ height: height * 0.3 }}
        />
        <View className="p-4">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-semibold">{details?.name}</Text>
              <Text className="text-neutral-700 font-light">
                {details?.location}
              </Text>
              <Text className="py-2 text-black/85">{details?.description}</Text>
            </View>
            <TouchableOpacity className="">
              <View className="flex-row items-center justify-end gap-1 ">
                <Feather name="star" size={20} className=""/>
                <Text className="text-xl font-semibold">{details?.averageRating}</Text>
              </View>
              <Text className="text-sm text-right text-gray-700">{details?.totalReview} reviews</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-start gap-6 py-4">
            <TouchableOpacity className="flex-row items-center">
              <Feather
                name="phone"
                size={20}
                className=" rounded-full p-2"
                color={"#000000"}
              />
              <Text className="text-xl">Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Feather name="map" size={20} className="rounded-full p-2" />
              <Text className="text-xl">View on Map</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FoodItems/>
      </View>
    </SafeAreaView>
  );
};

export default FoodSpotDetail;
