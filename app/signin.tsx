import { View, Text, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { Biometric, Facebook, Google } from "@/constants/images";
import { useRouter } from "expo-router";

const signin = () => {
  const navigation = useRouter();
  return (
    <View className="flex-1 bg-white px-8 py-4">
      <Text className="text-primary text-xl font-bold">Welcome</Text>
      <Text className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Text>
      <View className="flex mt-16">
        <View className="flex">
          <Text className="text-lg">Email</Text>
          <TextInput
            className="bg-tertiary rounded-xl"
            placeholder="example@example.com"
            placeholderTextColor={"#00BBD3"}
          />
        </View>
        <View className="flex my-3">
          <Text className="text-lg">Password</Text>
          <TextInput
            className="bg-tertiary rounded-xl"
            placeholder="example@example.com"
            placeholderTextColor={"#00BBD3"}
          />
        </View>

        <View className="items-end">
          <Text className="text-primary">Forget Password</Text>
        </View>
        <View className="flex items-center mt-10">
          <Pressable
            className=" bg-primary px-16 py-2 rounded-full"
            onPress={() => navigation.navigate("(home)" as never)}
          >
            <Text className="text-white text-xl">Log In</Text>
          </Pressable>
        </View>
        <Text className="text-center mt-6">Or Sign Up With</Text>
        <View className="flex-row items-center justify-between mx-20 mt-10">
          <Pressable className="bg-primary rounded-full p-2.5">
            <Image source={Google} height={40} width={40} />
          </Pressable>
          <Pressable className="bg-primary p-2 rounded-full">
            <Image source={Facebook} height={40} width={40} />
          </Pressable>
          <Pressable className="bg-primary p-2 rounded-full">
            <Image source={Biometric} height={40} width={40} />
          </Pressable>
        </View>
        <View className="flex-row items-center mx-16 mt-14">
          <Text>Don’t have an account?</Text>
          <Pressable onPress={() => navigation.navigate("signup" as never)}>
            <Text className="text-primary">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default signin;
