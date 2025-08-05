import { View, Text, useColorScheme } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{animation:'shift',
        headerShown: false,
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { 
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
          borderTopEndRadius:'10px'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="connect"
        options={{
          title: "Connect",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="comment-discussion" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
