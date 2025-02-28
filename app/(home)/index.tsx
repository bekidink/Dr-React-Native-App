import WeeklyCalendar from "@/components/WeeklyCalander";
import {
  Doctors,
  Favourite,
  NotitficationIcon,
  Pharmacy,
  Record,
  Search,
  Setting,
  Speciality,
  UserIcon,
} from "@/constants/images";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
export default function HomeScreen() {
  const [selected, setSelected] = useState("");
  return (
    <View className="flex-1 bg-white px-8 py-5">
      <View className="flex-row justify-between items-center mt-5">
        <View className="flex-row items-center gap-x-3 ">
          <Pressable className="bg-[#E9F6FE] rounded-full shadow-md p-1">
            <Image source={NotitficationIcon} height={20} width={20} />
          </Pressable>
          <Pressable className="bg-[#E9F6FE] rounded-full shadow-md p-1">
            <Image source={Setting} />
          </Pressable>
          <Pressable className="bg-[#E9F6FE] rounded-full shadow-md p-1">
            <Image source={Search} />
          </Pressable>
        </View>
        <View className="flex-row gap-x-1">
          <View className="flex">
            <Text className="text-primary">Hi, WelcomeBack</Text>
            <Text className="">beki dink</Text>
          </View>
          <Image source={UserIcon} />
        </View>
      </View>
      <View className="flex-row justify-between items-center mt-3 pb-3 border-b border-[#E9F6FE]">
        <Text className="text-primary text-lg">Categories</Text>
        <Text className="text-primary text-lg underline">See all</Text>
      </View>
      <View className="flex-row justify-between items-center mt-3">
        <Pressable className="flex items-center">
          <Image source={Favourite} />
          <Text className="text-primary text-xs">Favourite</Text>
        </Pressable>
        <Pressable className="flex items-center">
          <Image source={Doctors} />
          <Text className="text-primary text-xs">Doctors</Text>
        </Pressable>
        <Pressable className="flex items-center">
          <Image source={Pharmacy} />
          <Text className="text-primary text-xs">Pharmacy</Text>
        </Pressable>
        <Pressable className="flex items-center">
          <Image source={Speciality} />
          <Text className="text-primary text-xs">Speciality</Text>
        </Pressable>
        <Pressable className="flex items-center">
          <Image source={Record} />
          <Text className="text-primary text-xs">Record</Text>
        </Pressable>
      </View>
      <View className="flex bg-primary mt-4">
        <View className="flex-row items-center justify-between border-b border-[#E9F6FE] p-1">
          <Text className="text-xs text-white">Upcomming Schedule</Text>
          <Text className="text-xs text-white">Month</Text>
        </View>
       <WeeklyCalendar/>
      </View>
      
    </View>
  );
}
