import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { BookingHBg, HomeBg, Messages, Person } from '@/constants/images';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#E9F6FE",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => <Image source={HomeBg} />,
        }}
      />
      <Tabs.Screen
        name="(chat)"
        options={{
          title: "Chat",
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => <Image source={Messages} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          headerTitleAlign: "center", // Centers the title
          headerTintColor: "white", // Makes text white
          headerStyle: { backgroundColor: "#00BBD3" },
          title: "Profile",
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => <Image source={Person} />,
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Booking",
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => <Image source={BookingHBg} />,
        }}
      />
    </Tabs>
  );
}
