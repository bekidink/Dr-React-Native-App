import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const WeeklyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  // Get the current week's days
  const getWeekDays = (date: moment.MomentInput) => {
    let startOfWeek = moment(date).startOf("isoWeek"); // Monday as start
    return Array.from({ length: 7 }).map((_, i) =>
      moment(startOfWeek).add(i, "days").format("YYYY-MM-DD")
    );
  };

  const [currentWeek, setCurrentWeek] = useState(getWeekDays(selectedDate));

  const handleDayPress = (date: React.SetStateAction<string>) => {
    setSelectedDate(date);
  };

  return (
    <View className="py-2 ">
      {/* Week Navigation */}
      <View className="flex-row justify-between items-center mb-4 ">
        <TouchableOpacity
          onPress={() =>
            setCurrentWeek(
              getWeekDays(moment(currentWeek[0]).subtract(7, "days"))
            )
          }
        >
          <Text className="text-xl font-bold text-blue-500">{"<"}</Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          data={currentWeek}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`p-1.5 mx-1 rounded-full border border-white items-center ${
                selectedDate === item ? "bg-gray-200" : ""
              }`}
              onPress={() => handleDayPress(item)}
            >
              <Text
                className={`text-sm ${
                  selectedDate === item ? "text-primary" : "text-white"
                }`}
              >
                {moment(item).format("ddd")}
              </Text>
              <Text
                className={`text-lg font-bold ${
                  selectedDate === item ? "text-primary" : "text-white"
                }`}
              >
                {moment(item).format("D")}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={() =>
            setCurrentWeek(getWeekDays(moment(currentWeek[0]).add(7, "days")))
          }
        >
          <Text className="text-xl font-bold text-blue-500">{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Weekly Days List */}

      {/* Calendar (Hidden but controls selected date) */}
      {/* <Calendar
        current={selectedDate}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "blue" },
        }}
        hideExtraDays
      /> */}
      <View className="flex border  border-[#E9F6FE] rounded-xl mx-3 p-1">
        <View className="border-b border-[#E9F6FE] items-end p-1">
          <Text className="text-white underline">See All</Text>
        </View>
        <View className="flex px-2 pb-2 border-b border-[#E9F6FE]">
          <Text className="text-white">11 Month - Wednesday - Today</Text>
          <Text className="text-white">10:00 am Dr. Olivia Turner</Text>
        </View>
        <View className="flex p-2 ">
          <Text className="text-white">11 Month - Wednesday - Today</Text>
          <Text className="text-white">10:00 am Dr. Olivia Turner</Text>
        </View>
      </View>
    </View>
  );
};

export default WeeklyCalendar;
