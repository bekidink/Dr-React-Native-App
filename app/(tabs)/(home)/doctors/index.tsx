import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  BookingBg,
  cardioBg,
  dermatologyBg,
  Doctor1Bg,
  Doctor2Bg,
  Doctor3Bg,
  Doctor4Bg,
  GeneralMedBg,
  GyneologyBg,
  OdentologyBg,
  OncologyBg,
  Search,
} from "@/constants/images";
import { useRouter } from "expo-router";
const DATA = [
  {
    title: "Dr. Daniel Rodriguez",
    subtitle: "Interventional Cardiologist",
    bg: Doctor1Bg,
  },
  {
    title: "Dr. Jessica Ramirez",
    subtitle: " Electrophysiologist",
    bg: Doctor2Bg,
  },
  {
    title: "Dr. Michael Chang",
    subtitle: " Cardiac Imaging Specialist",
    bg: Doctor3Bg,
  },
  {
    title: "Dr. Michael Davidson, M.D.",
    subtitle: "Cardiology",
    bg: Doctor4Bg,
  },
];
const index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  const navigation = useRouter();
  return (
    <View className=" flex-1 ">
      <View className="bg-primary flex items-center py-5">
        <Text className="text-white text-lg">Find Your Docter</Text>
        <View className=" flex-row items-center px-2 bg-white h-10 rounded-full mt-3">
          <Image source={Search} height={10} width={10} />
          <TextInput
            className="text-base p-2 w-64 text-gray-900"
            placeholder="Search..."
            placeholderTextColor="#00BBD3"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView className="flex-1 bg-white">
        <View className="flex-row justify-between mx-5 py-2 mb-2">
          <View className="flex-row items-center gap-x-3">
            <Text>Sort By</Text>
            <View className="bg-primary rounded-full py-1 px-2">
              <Text className="text-white">A→Z</Text>
            </View>
            <Pressable className="rounded-full border border-primary py-1 px-2">
              <Text className="text-primary">Filter</Text>
            </Pressable>
          </View>
          <Text className="text-primary">Top Rating</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate(
                  `/(tabs)/(home)/doctors/${item.title}` as never
                )
              }
              className="flex-row   mx-5 my-3 py-2 px-7 rounded-xl "
            >
              <Image
                source={item.bg}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
              <View className="flex gap-y-2 px-4">
                <Text className="text-primary">{item.title}</Text>
                <Text className="">{item.subtitle}</Text>
                <View className="flex-row items-center justify-between">
                  <Pressable className="border border-primary rounded-full px-3 py-1">
                    <Text className="text-primary">Info</Text>
                  </Pressable>
                  <Image source={BookingBg} height={30} width={30} />
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default index;
