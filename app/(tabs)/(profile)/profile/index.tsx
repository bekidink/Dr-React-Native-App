import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { UserIcon } from '@/constants/images';

const ProfileDetail = () => {
  return (
    <View className="bg-white flex-1">
      <Stack.Screen options={{ title: "Edit Profile" }} />
      <View className="flex items-center bg-primary">
        <View className="w-28 h-28  p-3 flex items-center">
          <Image
            source={UserIcon}
            height={72}
            width={100}
            resizeMode="contain"
            className="w-full h-full object-contain"
          />
        </View>
      </View>
      <View className="flex mx-10 gap-y-2">
        <View className="flex gap-y-2">
          <Text>Full name</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="Jane  Doe"
          />
        </View>
        <View className="flex gap-y-2">
          <Text>Phone Number</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="+251972269598"
          />
        </View>
        <View className="flex gap-y-2">
          <Text>Email</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="bereketdinku876@gmail.com"
          />
        </View>
        <View className="flex gap-y-2 mb-8">
          <Text>Date of Birth</Text>
          <TextInput
            className="bg-[#E9F6FE] rounded-xl"
            placeholder="DD / MM / YY"
          />
        </View>
        <Pressable className='bg-primary flex items-center mx-10 rounded-full p-2 '>
<Text className='text-white text-lg'>Update Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ProfileDetail