import { View, Text, Switch } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View className="flex-1 bg-white px-10">
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">General Notification</Text>
        <Switch
          value={true}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Sound</Text>
        <Switch
          value={true}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Sound Call</Text>
        <Switch
          value={true}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Vibrate</Text>
        <Switch
          value={false}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Special Offers</Text>
        <Switch
          value={false}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Payments</Text>
        <Switch
          value={false}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Promo And Discount</Text>
        <Switch
          value={false}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
      <View className="flex-row items-center mx-5 justify-between">
        <Text className="text-lg">Cashback</Text>
        <Switch
          value={false}
          onValueChange={(value) => console.log(value)}
          trackColor={{ true: "#00BBD3" }}
        />
      </View>
    </View>
  );
}

export default Notification