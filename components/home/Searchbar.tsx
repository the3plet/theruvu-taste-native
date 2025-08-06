import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import React, {  useState } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import useAuthStore from "@/store/auth";

const tags: { name: any; title: string }[] = [
  { name: "chili-hot-outline", title: "Hot" },
  { name: "rice", title: "Korean" },
  { name: "food-outline", title: "Snacks" },
  { name: "ice-pop", title: "Icecream" },
];
const Searchbar = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
 const user = useAuthStore.getState().user
  return (
    <View className="w-full  py-4 pb-2 rounded-b-3xl ">
      <Text className="text-orange-500 mx-4 font-medium  text-3xl py-2">Good Morning, {user?.name || 'Guest User'} ☕</Text>
      <View
        className="flex-row mx-4 border border-slate-600/10 rounded-xl items-center px-8 mb-2 gap-2 bg-neutral-100/50"
        
      >
        <Feather name="search" />
        <TextInput className="w-full h-14" placeholder="Search for Food Spot & Food" value={search} onChangeText={setSearch}/>
      </View>
      <FlatList
        data={tags}
        horizontal 
        contentContainerStyle={{
          paddingHorizontal: 0,
          justifyContent: "space-between",alignItems:'center',
          flexGrow: 1,gap:8,
          paddingVertical: 0,width:'100%'
        }} className=" w-full px-4"
        renderItem={({ item }) => {
          const isSelected = selectedTag === item.title;
          return (
            <Pressable onPress={() => setSelectedTag(item.title)} >
              <View className={`flex-row items-center gap-1  px-3 rounded-full py-1  ${isSelected ? 'bg-[#FF8C42]' : 'bg-[#ffffff]'} `}>
                <MaterialCommunityIcons
                  name={item.name}
                  size={20}
                  color={isSelected ? "#ffffff" : "#1F2937"}
                />
                <Text
                  className={`text-sm  ${isSelected ? 'text-[#ffffff]' : 'text-[#1F2937]'}  `}
                >
                  {item.title}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Searchbar;
