import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { foodspotService } from "@/lib/services/foodspotService";
import { FoodSpot } from "@/constant/types/home";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
const { height } = Dimensions.get("screen");

const FoodCard = () => {
  const [foodspot, setFoodspot] = useState<FoodSpot[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await foodspotService.foodspots();
      setFoodspot(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    getData();
  }, []);

  console.log(foodspot[0]);
  return (
    <FlatList
      className="flex-1 w-full"
      keyExtractor={(item) => item.id}
      refreshing={loading} // shows refresh spinner
      onRefresh={onRefresh}
      data={foodspot}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight className="flex-1 p-4 pt-0 "  underlayColor="#F2F2F2" onPress={()=> router.push({pathname:'/home/foodspotdetails/[id]',params:{id:item.id}})}>
            <View>
              <Image
                source={{ uri: item?.imageUrl }}
                style={{ height: height * 0.3 }}
                className="w-full flex-1 h-5/6 rounded-xl"
              />

              <View className="flex-row justify-between pt-4">
                <View>
                  <Text className="text-xl font-semibold">{item?.name}</Text>
                  <Text className="text-lg font-light">{item?.location}</Text>
                  <Text
                    className={`text-base  font-normal ${!item?.isOpen && "text-red-500 rounded  underline"} `}
                  >
                    {item?.isOpen === true
                      ? "Open"
                      : "Shop is Currently Closed"}
                  </Text>
                </View>
                <View className="">
                  <View className="flex-row justify-end items-center">
                    <MaterialIcons name="star" size={20} className="" />
                    <Text className="text-xl font-normal items-center">
                      {item?.averageRating}.00
                    </Text>
                  </View>
                  <Text className="text-base text-right font-normal items-center">
                    {item?.type}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
      }}
    />
  );
};

export default FoodCard;
