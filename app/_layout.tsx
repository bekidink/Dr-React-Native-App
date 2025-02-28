import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen
          name="signin"
          options={({ navigation }) => ({
            headerShown: true,
            title: "Log In",
            headerTitleAlign: "center", // Centers the title
            headerTintColor: "white", // Makes text white
            headerStyle: { backgroundColor: "#00BBD3" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="signup"
          options={({ navigation }) => ({
            headerShown: true,
            title: "New Account",
            headerTitleAlign: "center", // Centers the title
            headerTintColor: "white", // Makes text white
            headerStyle: { backgroundColor: "#00BBD3" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="reset-password"
          options={({ navigation }) => ({
            headerShown: true,
            title: "Set Password",
            headerTitleAlign: "center", // Centers the title
            headerTintColor: "white", // Makes text white
            headerStyle: { backgroundColor: "#00BBD3" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
