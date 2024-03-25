import { Image, Platform } from "react-native";
import { View, Text } from "./Themed";
import React from "react";
import profiles from "../assets/data/profiles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewItem = () => {
  const avatars = profiles.profile;

  const isWeb = Platform.OS === "web";

  return isWeb ? (
    <View className="flex-row w-full gap-2 justify-center self-center p-1 bg-black">
      <View className="bg-black">
        <Image
          className="w-6 h-6 rounded-md tablet:w-14 tablet:h-14"
          source={{ uri: avatars[0].avatar }}
        />
      </View>
      <View className="flex-1 m-2 space-y-2 bg-black ">
        <Text className="font-bold text-white tablet:text-xl ll:text-xl xl:text-3xl">Johnrey</Text>
        <Text className="text-white ms:text-xs mm:text-xs ml:text-xs tablet:text-sm ll:text-lg xl:text-3xl">
          This series is amazing, I want to watch it again
        </Text>
        <View className="flex-row space-x-5 bg-black">
          <AntDesign name="like2" size={20} color="white" />
          <AntDesign name="dislike2" size={20} color="white" />
        </View>
      </View>
      <View className="flex-row gap-1 bg-black">
        <Text className="text-[10px] text-gray-400 tablet:text-[15px] ">
          March 25, 2024
        </Text>
        <AntDesign
          name="exclamationcircleo"
          className="w-[10px] h-[10px] tablet:w-[15px] tablet:h-[15px] xl:hidden"
          color="white"
        />
      </View>
    </View>
    
  ) : (
    // MOBILE APP
    <View className="flex-row gap-2 justify-center self-center p-1 bg-black">
      <View className="bg-black">
        <Image
          className="w-6 h-6 rounded-md tablet:w-14 tablet:h-14"
          source={{ uri: avatars[0].avatar }}
        />
      </View>
      <View className="flex-1 m-2 space-y-2 bg-black">
        <Text className="font-bold text-white tablet:text-xl">Johnrey</Text>
        <Text className="text-white tablet:text-xl">
          This series is amazing, I want to watch it again
        </Text>
        <View className="flex-row space-x-5 bg-black">
          <AntDesign name="like2" size={20} color="white" />
          <AntDesign name="dislike2" size={20} color="white" />
        </View>
      </View>
      <View className="flex-row gap-1 bg-black">
        <Text className="text-[10px] text-gray-400 tablet:text-[15px]">
          March 25, 2024
        </Text>
        <AntDesign
          name="exclamationcircleo"
          className="w-[10px] h-[10px] tablet:w-[15px] tablet:h-[15px]"
          color="white"
        />
      </View>
    </View>
  );
};

export default ReviewItem;
