import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Logo, Splashlogo } from "@/constants/images";
import { useRouter } from "expo-router";

const index = () => {
  const navigation = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("welcome" as never); // Replace 'Home' with your target screen name
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigation]);
  return (
    <View className="bg-primary flex-1 items-center justify-center gap-y-10">
      <Image source={Splashlogo} />
      <Text className="text-white text-2xl font-bold">HealthTrack</Text>
    </View>
  );
};

export default index;
