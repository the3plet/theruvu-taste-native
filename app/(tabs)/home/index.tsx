import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { foodspotService } from "@/lib/services/foodspotService";
import Searchbar from "@/components/home/Searchbar";
import FoodCard from "@/components/home/FoodCard";

const index = () => {
 
  return (
    <SafeAreaView className="bg-white flex-1">
      <Searchbar/>
      <FoodCard/>
    </SafeAreaView>
  );
};

export default index;
