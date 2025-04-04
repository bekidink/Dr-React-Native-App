import { CallBg, VideoBg } from "@/constants/images";
import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, Pressable } from "react-native";
import { TouchableOpacity, View } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "transfer/index",
};

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          title: "Rating",
          headerTitleAlign: "center", // Centers the title
          headerTintColor: "white", // Makes text white
          headerStyle: { backgroundColor: "#00BBD3" },

          headerRight: () => (
            <View className="flex-row gap-x-2">
              <Pressable className="bg-white  p-2 items-center rounded-full">
                <Image source={CallBg} />
              </Pressable>

              <Pressable className="bg-white p-2 rounded-full">
                <Image source={VideoBg} />
              </Pressable>
            </View>
          ),
        })}
      />
      {/* <Stack.Screen name="specialities" />
      <Stack.Screen name="doctors" />

      <Stack.Screen name="rated" />
      <Stack.Screen name="favourite" />
      <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
