import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import {
  NotificationSettBg,
  PassMangBg,
  ProfileSetBg,
  SettingsSetBg,
} from "@/constants/images";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";

const Settings = () => {
  const navigation = useRouter();
  return (
    <View className="bg-white flex-1">
      <Stack.Screen options={{ title: "Settings" }} />
      <View className="flex m-5">
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full py-1 px-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/settings/(notification)" as never )
              }
            >
              <Image source={NotificationSettBg} />
            </Pressable>
            <Text className="text-xl">Notification Settings</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between my-5">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full py-1 px-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/settings/(pass)" as never )
              }
            >
              <Image source={PassMangBg} />
            </Pressable>
            <Text className="text-xl">Password manager</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full py-2 px-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/settings" as never)
              }
            >
              <Image source={ProfileSetBg} />
            </Pressable>
            <Text className="text-xl">Delete Account</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
      </View>
    </View>
  );
};

export default Settings;
