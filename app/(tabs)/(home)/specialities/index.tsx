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
  cardioBg,
  dermatologyBg,
  GeneralMedBg,
  GyneologyBg,
  OdentologyBg,
  OncologyBg,
  Search,
} from "@/constants/images";
import { useRouter } from "expo-router";
const DATA = [
  {
    title: "Cardiology",
    bg: cardioBg,
  },
  {
    title: "Dermatology",
    bg: dermatologyBg,
  },
  {
    title: "General medicine",
    bg: GeneralMedBg,
  },
  {
    title: "Gynecology",
    bg: GyneologyBg,
  },
  {
    title: "Odontology",
    bg: OdentologyBg,
  },
  {
    title: "Oncology",
    bg: OncologyBg,
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
          <Pressable className="" onPress={()=>navigation.navigate("/(tabs)/(home)/doctors" as never)}>
            <Text className="text-primary">Doctors</Text>
          </Pressable>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate(
                  `/(tabs)/(home)/specialities/${item.title}` as never
                )
              }
              className="flex-1 items-center bg-primary mx-5 py-2 px-7 rounded-xl justify-between"
            >
              <Image
                source={item.bg}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
              <Text className="text-white">{item.title}</Text>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
            marginRight: 10,
          }} // Adds spacing between rows
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default index;
