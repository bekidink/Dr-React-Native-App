import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Logo } from "@/constants/images";
import { useRouter } from "expo-router";

const welcome = () => {
  const navigation = useRouter();
  return (
    <View className="bg-white flex-1 items-center px-5 justify-center ">
      <View className="flex items-center justify-between gap-y-12">
        <View className="flex items-center gap-3">
          <Image source={Logo} />
          <Text className="text-primary text-2xl font-bold">HealthTrack</Text>
        </View>

        <View className="flex items-center gap-y-6">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
          <Pressable
            className="bg-primary px-16 rounded-full py-2"
            onPress={() => navigation.navigate("signin" as never)}
          >
            <Text className="text-2xl text-white">Log In</Text>
          </Pressable>
          <Pressable
            className="p-1"
            onPress={() => navigation.navigate("signup" as never)}
          >
            <Text className="text-primary text-2xl">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default welcome;
