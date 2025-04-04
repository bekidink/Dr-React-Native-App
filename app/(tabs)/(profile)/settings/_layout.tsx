import { Profile2 } from "@/constants/images";
import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "transfer/index",
};

export default function HomeLayout() {
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
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
          ),

         
        })}
      />
      <Stack.Screen name="(notification)" />
      {/* <Stack.Screen name="specialities" />
      <Stack.Screen name="doctors" />

      <Stack.Screen name="rated" />
      <Stack.Screen name="favourite" />
      <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
