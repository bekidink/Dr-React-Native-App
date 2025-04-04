import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <ScrollView className="flex-1 bg-white px-5">
      <Text className="text-lg font-bold">last update: 14/08/2024</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
        diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
        scelerisque neque, sed accumsan metus. Nunc auctor tortor in dolor
        luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at
        rhoncus at, volutpat ut lacus. Morbi pellentesque malesuada eros semper
        ultrices. Vestibulum lobortis enim vel neque auctor, a ultrices ex
        placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas
        nulla posuere neque tincidunt porta.
      </Text>
      <Text className="mt-5 text-primary text-lg">Terms & Conditions</Text>
      <View className="flex-row ">
        <Text>1. </Text>
        <Text>
          Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
          eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
          nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
          rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
          rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus
          ac turpis.{" "}
        </Text>
      </View>
      <View className="flex-row ">
        <Text>2. </Text>
        <Text>
          Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
          eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
          nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
          rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
          rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus
          ac turpis.{" "}
        </Text>
      </View>
      <View className="flex-row ">
        <Text>3. </Text>
        <Text>
          Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
          eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
          nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
          rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
          rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus
          ac turpis.{" "}
        </Text>
      </View>
      <View className="flex-row ">
        <Text>4. </Text>
        <Text>
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
          Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
          pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim
          vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed
          suscipit tortor. Nam egestas nulla posuere neque.
        </Text>
      </View>
    </ScrollView>
  );
}

export default PrivacyPolicy