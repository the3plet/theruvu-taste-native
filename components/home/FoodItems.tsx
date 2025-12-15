import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FoodItem } from "@/constant/types/home";
import { foodItemService } from "@/lib/services/foodItemServices";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

const FoodItems = () => {
  const [foodItem, setFoodItem] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id, "id");

  const getFoodItem = async () => {
    try {
      setLoading(true);
      const response = await foodItemService.getFoodItem(id);
      setFoodItem(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodItem();
  }, []);

  const onRefresh = useCallback(() => {
    getFoodItem();
  }, []);

  return (
    <View className="p-4 pt-0">
      <Text className="text-xl font-bold pb-2">Menu</Text>
      <View>
        <FlatList
          ListEmptyComponent={
            loading ? (
              <View className="items-center justify-center py-10">
                <ActivityIndicator size="large" color="#FF6347" />
              </View>
            ) : (
              <View className="items-center justify-center py-10">
                <Text className="text-lg text-gray-500">
                  No menu items available
                </Text>
              </View>
            )
          }
          data={foodItem}
          refreshing={loading}
          onRefresh={onRefresh}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableHighlight>
              <View className="flex-row gap-2">
                <View style={{ flex: 1, position: "relative" }}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{
                      height: height * 0.1,
                      width: width * 0.3,
                      resizeMode: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <TouchableHighlight className="absolute top-1.5 left-1.5 flex-row items-center bg-black/40 rounded-full px-1.5 py-0.5"
                  underlayColor="transparent">
                    <View className="flex-row items-center">
                      <Ionicons name="heart" color="white" size={15} />
                      <Text className="text-white ml-1  font-bold">5</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 2 }} className="justify-between">
                  <View>
                    <View className="flex-row justify-between ">
                      <Text className="text-lg font-semibold">{item.name}</Text>
                      <Text className="text-lg">₹{item.price}</Text>
                    </View>
                    <View>
                      <Text>{item.description}</Text>
                    </View>
                  </View>

                  <Text className="self-start rounded-xl mb-1 text-center   text-red-400">
                    Currently Not Serving
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </View>
  );
};

export default FoodItems;
