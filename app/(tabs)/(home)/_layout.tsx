import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "transfer/index",
};

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="specialities" />
      <Stack.Screen name="doctors" />
      
      {/* <Stack.Screen name="utility/index" /> */}
      {/* <Stack.Screen name="beneficiaries/index" /> */}
      {/* <Stack.Screen name="payMerchant/index" /> */}
    </Stack>
  );
}
