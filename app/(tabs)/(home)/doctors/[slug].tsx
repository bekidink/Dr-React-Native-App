import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  BadgeBg,
  BookingBg,
  CallBg,
  ChatBg,
  Doctor1Bg,
  Doctor2Bg,
  Doctor3Bg,
  Doctor4Bg,
  HeartBg,
  QuestionBg,
  ScheduleBg,
  Search,
  VideoBg,
} from "@/constants/images";
import { AntDesign } from "@expo/vector-icons";
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
const Speciality = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  console.log(slug, "slug");
  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  const navigation = useRouter();
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          title: "Doctors",
          headerTitleAlign: "center", // Centers the title
          headerTintColor: "white", // Makes text white
          headerStyle: { backgroundColor: "#00BBD3" },
          header: () => (
            <View className="flex-row gap-x-28 pt-10 bg-primary px-3">
              <View className="">
                <Pressable onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={24} color="white" />
                </Pressable>
              </View>
              <Text className="text-center text-white text-lg">
                Specialties
              </Text>
            </View>
          ),
        })}
      />
      <View className="flex-row bg-primary pt-12 justify-between">
        <View className="flex-row justify-between">
          <Pressable className="mx-3">
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
          <View className="flex-row items-center bg-white px-2 py-1 rounded-full gap-x-1">
            <Image source={BookingBg} height={10} width={10} />
            <Text>Schedule</Text>
          </View>
          <View className="flex-row gap-x-2 mx-2">
            <Pressable className="bg-white rounded-full items-center justify-center p-2">
              <Image source={CallBg} height={20} width={10} />
            </Pressable>
            <Pressable className="bg-white rounded-full items-center justify-center p-2">
              <Image source={VideoBg} />
            </Pressable>
            <Pressable className="bg-white rounded-full items-center justify-center p-2">
              <Image source={ChatBg} />
            </Pressable>
          </View>
        </View>
        <View className="flex-row gap-1 items-center mx-5">
          <Pressable className="rounded-full border border-white px-2 py-1.5">
            <Image source={QuestionBg} height={20} width={20} />
          </Pressable>
          <Pressable className="rounded-full border border-white px-1.5 py-1.5">
            <Image source={HeartBg} height={20} width={20} />
          </Pressable>
        </View>
        <View className="flex-row items-center"></View>
      </View>
      <View className="bg-primary flex  py-5">
        <View className="flex-row ml-14">
          <View className="w-20 h-16">
            <Image
              source={Doctor1Bg}
              className="w-full h-full object-cover"
              resizeMode="contain"
            />
          </View>
          <View className="flex gap-y-1">
            <Text className="text-white">Dr. Jacob Lopez, M.D.</Text>
            <Text className="text-white">Surgical Dermatology</Text>
            <View className="flex-row gap-x-4">
              <Pressable className="flex-row rounded-xl px-2 items-center gap-x-2 bg-white">
                <AntDesign name="star" size={14} color="#00BBD3" />
                <Text>5</Text>
              </Pressable>
              <Pressable className="flex-row rounded-xl px-2 items-center gap-x-2 bg-white">
                <Image source={ChatBg} />
                <Text>5</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className=" relative -bottom-10 flex-row items-center px-10  h-10 mx-1 gap-x-3 rounded-full mt-3">
          <View className="rounded-full flex-row items-center p-1 bg-white">
            <Image source={BadgeBg} />
            <View className="flex">
              <Text className="text-xs">15 Years</Text>
              <Text className="text-xs">experiences</Text>
            </View>
          </View>
          <View className="rounded-full flex-row items-center p-3 bg-white">
            <Image source={ScheduleBg} />
            <View className="flex">
              <Text className=" text-xs">Mon-Sat / 9:00AM - 5:00PM</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 mt-10 bg-white">
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
          <Text className="text-primary">Doctors</Text>
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

export default Speciality;
