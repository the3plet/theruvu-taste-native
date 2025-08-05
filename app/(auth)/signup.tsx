import authbg from "@/assets/images/authbg.png";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import logo from "@/assets/images/icon.png";
import LoginForm from "@/components/auth/LoginForm";
import SigninForm from "@/components/auth/SigninForm";

const Signup = () => {
  return (
     <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >

      <ImageBackground source={authbg} className="h-full  items-start">
        <BlurView
          intensity={90}
          tint="light"
          className="absolute top-0 left-0 right-0 bottom-0"
          />
        <View className=" items-center justify-center flex-1 w-full">
          <View className="bg-neutral-100/85  items-center rounded-xl shadow-2xl p-4 gap-2">
            <Image source={logo} className="w-24 h-24 rounded-full " />
            <Text className="text-3xl font-bold pb-2 text-orange-500">Sign Up</Text>
            {/* <Text className="">
              Enter your Email and Password to secure access your account and
              manage your services
              </Text> */}
            <SigninForm/>
          </View>
        </View>
      </ImageBackground>
              </KeyboardAvoidingView>
  );
};

export default Signup;
