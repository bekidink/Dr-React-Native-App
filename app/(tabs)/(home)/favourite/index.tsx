import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
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
const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const index = () => {
  const [selected, setSelected] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState(data[0].label);
  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  const navigation = useRouter();
  return (
    <View className="flex-1 bg-white">
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
        {/* <Pressable
                 className=""
                 onPress={() => navigation.navigate("/(tabs)/(home)/rated" as never)}
               >
                 <Text className="text-primary">Top Rating</Text>
               </Pressable> */}
      </View>
      <View className="flex-row items-center justify-between mx-10">
        <Pressable
          className={`bg-primary px-10 rounded-full py-2 ${
            selected === 0 ? "bg-primary" : "bg-white border border-primary"
          }`}
          onPress={() => setSelected(0)}
        >
          <Text
            className={`${
              selected === 0 ? "text-white" : "text-black"
            } text-lg `}
          >
            Doctors
          </Text>
        </Pressable>
        <Pressable
          className={`bg-primary px-10 rounded-full py-2 ${
            selected === 1 ? "bg-primary" : "bg-white border border-primary"
          }`}
          onPress={() => setSelected(1)}
        >
          <Text
            className={`${
              selected === 1 ? "text-white" : "text-black"
            } text-lg `}
          >
            Services
          </Text>
        </Pressable>
      </View>
      {selected === 0 ? (
        <ScrollView className="flex">
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
                  <Pressable className="bg-primary items-center rounded-full px-3 py-2">
                    <Text className="text-white">Make Appointment</Text>
                  </Pressable>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      ) : (
        <ScrollView className=" flex mx-5 ">
          <View className="m-5 ">
            <Dropdown
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BBD3",
                borderRadius: 8,
                // padding: 12,
                // paddingVertical: 20,
                // paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#E5E7EB",
              }}
              placeholderStyle={{ fontSize: 14, color: "white" }}
              selectedTextStyle={{ fontSize: 14, color: "white" }}
              data={data}
              maxHeight={300}
              labelField="accountNumber"
              valueField="accountNumber"
              placeholder=""
              value={selectedValue}
              onChange={(item: any) => {
                //   setSelectedAccount(item.accountNumber);
                setSelectedValue(item.label);
              }}
              renderItem={(item: any) => {
                return (
                  <View className="flex-row p-4 justify-between items-center">
                    <Text className="flex-1 text-base">{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>

          <View className="flex-row p-1 mt-3 bg-[#E9F6FE] mx-5 rounded-xl">
            <Text className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque congue lorem, vel tincidunt tortor placerat a. Proin
              ac diam quam. Aenean in sagittis magna, ut feugiat diam.
            </Text>
          </View>
          <View className="rounded-full bg-[#E9F6FE] items-center mx-10 mt-5 py-2 ">
            <Text className="text-lg">Looking Doctors</Text>
          </View>
          <View className="mx-5 my-3">
            <Dropdown
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BBD3",
                borderRadius: 8,
                // padding: 12,
                // paddingVertical: 20,
                // paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#E5E7EB",
              }}
              placeholderStyle={{ fontSize: 14, color: "white" }}
              selectedTextStyle={{ fontSize: 14, color: "white" }}
              data={data}
              maxHeight={300}
              labelField="accountNumber"
              valueField="accountNumber"
              placeholder=""
              value={selectedValue}
              onChange={(item: any) => {
                //   setSelectedAccount(item.accountNumber);
                setSelectedValue(item.label);
              }}
              renderItem={(item: any) => {
                return (
                  <View className="flex-row p-4 justify-between items-center">
                    <Text className="flex-1 text-base">{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View className="mx-5 my-3">
            <Dropdown
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BBD3",
                borderRadius: 8,
                // padding: 12,
                // paddingVertical: 20,
                // paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#E5E7EB",
              }}
              placeholderStyle={{ fontSize: 14, color: "white" }}
              selectedTextStyle={{ fontSize: 14, color: "white" }}
              data={data}
              maxHeight={300}
              labelField="accountNumber"
              valueField="accountNumber"
              placeholder=""
              value={selectedValue}
              onChange={(item: any) => {
                //   setSelectedAccount(item.accountNumber);
                setSelectedValue(item.label);
              }}
              renderItem={(item: any) => {
                return (
                  <View className="flex-row p-4 justify-between items-center">
                    <Text className="flex-1 text-base">{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View className="m-5 my-3">
            <Dropdown
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BBD3",
                borderRadius: 8,
                // padding: 12,
                // paddingVertical: 20,
                // paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#E5E7EB",
              }}
              placeholderStyle={{ fontSize: 14, color: "white" }}
              selectedTextStyle={{ fontSize: 14, color: "white" }}
              data={data}
              maxHeight={300}
              labelField="accountNumber"
              valueField="accountNumber"
              placeholder=""
              value={selectedValue}
              onChange={(item: any) => {
                //   setSelectedAccount(item.accountNumber);
                setSelectedValue(item.label);
              }}
              renderItem={(item: any) => {
                return (
                  <View className="flex-row p-4 justify-between items-center">
                    <Text className="flex-1 text-base">{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>

          <View className="m-5 my-3">
            <Dropdown
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BBD3",
                borderRadius: 8,
                // padding: 12,
                // paddingVertical: 20,
                // paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#E5E7EB",
              }}
              placeholderStyle={{ fontSize: 14, color: "white" }}
              selectedTextStyle={{ fontSize: 14, color: "white" }}
              data={data}
              maxHeight={300}
              labelField="accountNumber"
              valueField="accountNumber"
              placeholder=""
              value={selectedValue}
              onChange={(item: any) => {
                //   setSelectedAccount(item.accountNumber);
                setSelectedValue(item.label);
              }}
              renderItem={(item: any) => {
                return (
                  <View className="flex-row p-4 justify-between items-center">
                    <Text className="flex-1 text-base">{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default index;
