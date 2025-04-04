import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  FavourteSetBg,
  HelpSetBg,
  LogoutSetBg,
  PaymentSetBg,
  PrivacySetBg,
  ProfileSetBg,
  SettingsSetBg,
  UserIcon,
} from "@/constants/images";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const navigation = useRouter();
  return (
    <View className="flex-1 bg-white">
      <View className="bg-primary flex-row items-center pt-10 mb-10">
        <View className="w-28 h-28 ml-10 p-3">
          <Image
            source={UserIcon}
            height={72}
            width={100}
            resizeMode="contain"
            className="w-full h-full object-contain"
          />
        </View>
        <View className="flex">
          <Text className="text-white font-bold">Jane Doe</Text>
          <Text className="text-white ">+251901108024</Text>
          <Text className="text-white ">bereketdinku80@gmail.com</Text>
        </View>
      </View>
      <View className="flex m-5  gap-y-5">
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full p-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/profile" as never)
              }
            >
              <Image source={ProfileSetBg} />
            </Pressable>
            <Text className="text-xl">Profile</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable className="bg-primary rounded-full p-2 mx-3">
              <Image source={FavourteSetBg} />
            </Pressable>
            <Text className="text-xl">Favourite</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable className="bg-primary rounded-full p-2 mx-3">
              <Image source={PaymentSetBg} />
            </Pressable>
            <Text className="text-xl">Payment Method</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full p-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/(privacy)" as never)
              }
            >
              <Image source={PrivacySetBg} />
            </Pressable>
            <Text className="text-xl">Privacy Policy</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable
              className="bg-primary rounded-full p-2 mx-3"
              onPress={() =>
                navigation.navigate("/(tabs)/(profile)/settings" as never)
              }
            >
              <Image source={SettingsSetBg} />
            </Pressable>
            <Text className="text-xl">Settings</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable className="bg-primary rounded-full py-2 px-3 mx-3">
              <Image source={HelpSetBg} />
            </Pressable>
            <Text className="text-xl">Help</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Pressable className="bg-primary rounded-full p-2 mx-3">
              <Image source={LogoutSetBg} />
            </Pressable>
            <Text className="text-xl">Logout</Text>
          </View>

          <AntDesign name="right" size={24} color="#00BBD3" />
        </View>
      </View>
    </View>
  );
}
