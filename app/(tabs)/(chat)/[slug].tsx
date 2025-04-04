import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import { FileAttach, VoiceAttach } from '@/constants/images';

const Message = () => {
    const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: slug }} />
      <View className='flex'>
        <View className='items-end'>
            
        </View>
        <View className="items-start">

        </View>
      </View>
      <View className="absolute bottom-0 bg-primary w-full p-2">
        <View className="flex-row mx-10 justify-between">
          <Pressable className="bg-white rounded-full p-2">
            <Image source={FileAttach} />
          </Pressable>
          <View className="bg-white flex-row w-2/3 justify-between rounded-full px-2">
            <TextInput
              placeholder="write messages"
              className="bg-white  p-2 rounded-full"
            />
            <Pressable className="bg-white rounded-full p-2">
              <Image source={VoiceAttach} />
            </Pressable>
          </View>
          <Pressable className="bg-white rounded-full p-2">
            <Image source={VoiceAttach} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Message