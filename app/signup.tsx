import { View, Text, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { Biometric, Facebook, Google } from "@/constants/images";
import { useRouter } from "expo-router";

const signup = () => {
    const navigation=useRouter()
  return (
    <View className="flex-1 bg-white px-8 py-4">
      <View className="flex">
        <Text className="text-lg">Full name</Text>
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
      <View className="flex">
        <Text className="text-lg">Email</Text>
        <TextInput
          className="bg-tertiary rounded-xl"
          placeholder="example@example.com"
          placeholderTextColor={"#00BBD3"}
        />
      </View>
      <View className="flex my-3">
        <Text className="text-lg">Mobile Number</Text>
        <TextInput
          className="bg-tertiary rounded-xl"
          placeholder="example@example.com"
          placeholderTextColor={"#00BBD3"}
        />
      </View>
      <View className="flex my-3">
        <Text className="text-lg">Date of birth</Text>
        <TextInput
          className="bg-tertiary rounded-xl"
          placeholder="DD / MM / YY"
          placeholderTextColor={"#00BBD3"}
        />
      </View>
      <View className="flex mx-5">
        <Text className="text-center"> By continuing, you agree to </Text>
        <View className="flex-row items-center gap-x-2 px-6">
          <Text className="text-primary"> Terms of Use</Text>
          <Text>and</Text>
          <Text className="text-primary">Privacy Policy.</Text>
        </View>
      </View>
      <View className="flex items-center mt-5">
        <Pressable className=" bg-primary px-16 py-2 rounded-full">
          <Text className="text-white text-xl">Sign Up</Text>
        </Pressable>
      </View>
      <Text className="text-center mt-3">Or Login With</Text>
      <View className="flex-row items-center justify-between mx-20 mt-5">
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
      <View className="flex-row items-center mx-16 mt-6">
        <Text>already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("signin" as never)}>
          <Text className="text-primary">Login In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default signup;
