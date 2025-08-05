import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { LoginPayload } from "@/constant/types/auth";
import { authService } from "@/lib/services/authServices";
import useAuthStore from "@/store/auth";

type FormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginPayload) => {
    try {
      const response = await authService.login(data);
      console.log(response);
      if (response) {
        useAuthStore.getState().setUser({
          ...response.user,
          token: response.token,
        });
        router.push('/(tabs)')
      }
    } catch (error:any) {
      console.log(error.response?.data || error.message);
    }
  };
  console.log(errors);
  return (
    <View className="px-2 gap-2">
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row  items-center w-80 h-12 bg-white rounded-lg px-4">
            <Feather name="mail" size={15} />
            <TextInput
              className="pl-2 w-full"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      {errors.email && (
        <Text className="text-red-400 px-4">{errors.email.message}</Text>
      )}
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be min of 6 character",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row  items-center w-80 h-12 bg-white rounded-lg px-4">
            <Feather name="lock" size={15} />
            <TextInput
              className="pl-2 w-full"
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      {errors.password && (
        <Text className="text-red-400 px-4">{errors.password.message}</Text>
      )}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-orange-500 rounded-xl py-3 "
      >
        <Text className="text-xl font-semibold text-center text-white">
          Login
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center  my-4">
        <View className="flex-1 h-[1px] bg-gray-300" />
        <Text className="mx-2 text-gray-500">or</Text>
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(auth)/signup")}
        className="border border-orange-500 rounded-xl py-3 "
      >
        <Text className="text-xl font-semibold text-center text-orange-500">
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
