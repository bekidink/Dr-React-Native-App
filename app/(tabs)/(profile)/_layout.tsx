import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "transfer/index",
};

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="profile"
        options={({ navigation }) => ({
          headerShown: false,
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
              <Text className="text-center text-white text-lg">Favourite</Text>
            </View>
          ),
        })}
      />
      <Stack.Screen name="settings" />
      <Stack.Screen name="(privacy)" />
      {/* <Stack.Screen name="specialities" />
      <Stack.Screen name="doctors" />

      <Stack.Screen name="rated" />
      <Stack.Screen name="favourite" />
      <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
