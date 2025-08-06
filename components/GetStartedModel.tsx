import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";

const GetStartedModel = () => {
  const [open, setOpen] = useState<boolean>(false);

  const CustomPressButton = ({
    title,
    bg,
    color,
    url,
  }: {
    title: string;
    bg: string;
    url: Href;
    color: string;
  }) => {
    return (
      <TouchableOpacity
        className={`w-fit bg-${bg} rounded-2xl border`}
        onPress={() => {
          setOpen(false);
          router.push(url);
        }}
      >
        <Text className={` text-2xl py-4 text-${color} text-center`}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>

      <TouchableOpacity
        className="  bg-black py-6 px-36 mt-6 rounded-full "
        onPress={() => setOpen(true)}
        >
        <Text className="text-white text-2xl ">Get Started</Text>
      </TouchableOpacity>
      <Modal
        visible={open}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <Pressable
          className=" flex-1 justify-end"
          onPress={() => setOpen(false)}
        >
          <Pressable
            className="h-2/4 bg-white rounded-3xl p-4 m-4 px-8 "
            onPress={(e) => e.stopPropagation}
          >
            <View className="py-4">
              <View className="flex-row justify-between">
                <Text className="text-5xl py-6">👋</Text>
                <Ionicons
                  name="close"
                  className=" rounded-full text-center"
                  color="#C0BCC0"
                  size={25}
                  onPress={() => setOpen(false)}
                />
              </View>
              <Text className="text-2xl font-semibold">Get Started</Text>
              <Text className="text-neutral-500 font-medium">
                Register with us to add reviews, post media, share your
                experience with others
              </Text>
            </View>
            <View className="gap-2">
              <CustomPressButton
                title="Continue with Email"
                bg="black"
                color="white"
                url="/(auth)"
              />
              <CustomPressButton
                title="Sign Up"
                bg="[#EEEBEE]"
                color="black"
                url="/(auth)/signup"
              />
              <CustomPressButton
                title="Continue as Guest"
                bg="[#EEEBEE]"
                color="black"
                url="/(tabs)"
              />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default GetStartedModel;
