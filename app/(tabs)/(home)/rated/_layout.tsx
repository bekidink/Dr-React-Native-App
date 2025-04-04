import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen
        name="index"
        options={({ navigation }) => ({
          headerShown: true,
          title: "Rating",
          headerTitleAlign: "center", // Centers the title
          headerTintColor: "white", // Makes text white
          headerStyle: { backgroundColor: "#00BBD3" },
          header: () => (
            <View className="flex-row gap-x-28 pt-10 bg-primary px-3">
              <View className="">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <Text className="text-center text-white text-lg">
                Rated
              </Text>
            </View>
          ),
        })}
      />
      {/* <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: false,

          headerTitleAlign: "center", // Centers the title
          headerTintColor: "white", // Makes text white
          headerStyle: { backgroundColor: "#00BBD3" },
          header: () => (
            <View className="flex-row gap-x-28 pt-10 bg-primary px-3">
              <View className="">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <Text className="text-center text-white text-lg">
                Specialties
              </Text>
            </View>
          ),
        })}
      /> */}
      {/* <Stack.Screen name="payment/index" />
      <Stack.Screen name="topup/index" />
      <Stack.Screen name="topup/contacts" options={{ presentation: "modal" }} />
      <Stack.Screen name="others/index" />
      <Stack.Screen name="sedeka/zamzamSedeka" />
      <Stack.Screen name="transfer/wallet/contacts" options={{ presentation: "modal" }} /> */}
      {/* <Stack.Screen name="utility/index" /> */}
      {/* <Stack.Screen name="beneficiaries/index" /> */}
      {/* <Stack.Screen name="payMerchant/index" /> */}
    </Stack>
  );
};

export default _layout;
