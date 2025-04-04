import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { UserIcon } from "@/constants/images";

const index = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="flex mt-8 mx-10 ">
        <View className="flex gap-y-2">
          <Text>Current Password</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="**********"
          />
          <View className="items-end">
            <Text className="text-xs text-primary text-end">
              Forgot Password
            </Text>
          </View>
        </View>
        <View className="flex gap-y-2 mb-5">
          <Text>New Password</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl text-primary"
            placeholder="**********"
          />
        </View>
        <View className="flex gap-y-2">
          <Text>Confirm New Password</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="**********"
          />
        </View>
      </View>
      <Pressable className="bg-primary absolute bottom-20 left-20 flex items-center justify-center ml-10 rounded-full px-4 py-2 ">
        <Text className="text-white text-lg ">Change Password</Text>
      </Pressable>
    </View>
  );
};

export default index;
