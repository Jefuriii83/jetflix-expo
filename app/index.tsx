import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  TextInput
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-screen h-screen">
      <ImageBackground
        className="w-screen h-screen"
        resizeMode="cover"
        source={require("../packages/assets/images/netflix-bg2.jpg")}>
        <View className="bg-[#000000e6] h-20 flex-row items-center justify-between w-screen ms:px-6 mm:px-6 ml:px-6 tablet:px-7 ls:px-7 ll:px-7 xl:px-7" >
          <Text className="text-4xl font-bold text-red-600 font-netflix-medium ms:text-xl mm:text-xl">
            JETFLIX
          </Text>

          <Pressable
            className="bg-red-600 rounded-md"
            onPress={() => {
              router.navigate({ pathname: "/profile/" });
            }}
          >
            <Text className="text-white px-9 font-medium text-center ms:text-xs ms:px-6 ms:py-2 mm:py-2.5 ml:py-3 tablet:py-3 ls:py-4 ll:py-4 xl:py-5">
              Sign In
            </Text>
          </Pressable>
        </View>

        <View className="px-8  justify-center items-center my-auto w-screen ">
          <Text className="font-bold text-white text-center ms:text-3xl mm:text-4xl ml:text-4xl tablet:text-5xl ls:text-5xl ll:text-5xl xl:text-8xl">
            Unlimited Movies, TV shows, and more
          </Text>
          <Text className="text-white mb-6 text-2xl text-center py-10 ms:text-2xl mm:text-3xl ml:text-4xl tablet:text-4xl ls:text-5xl ll:text-5xl xl:text-8xl">
            Starts at ₱149. Cancel anytime.
          </Text>
          <Text className="text-white text-2xl text-center ms:text-2xl mm:text-3xl ml:text-4xl tablet:text-4xl ls:text-5xl ll:text-5xl xl:text-6xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>

          <View className="pt-10 flex-row items-center justify-center gap-x-5 w-full">
            <TextInput className="w-80 h-full bg-black border-gray-50 border-2 text-[#c4c4c4] p-4 ms:w-52 mm:w-52 ml:w-52 tablet:w-52 ls:w-52 ll:w-52 xl:w-[700px] "
              placeholder="Email Address"
            />
            <Pressable
              onPress={() => {}}
              className="bg-red-600 rounded-md hover:bg-red-800 py-4 px-5 ms:py-3 ms:px-2 mm:py-4 mm:px-"
            >
              <Text className="text-white text-xl text-center ms:text-xs">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
        </ImageBackground>
    </View>
  );
}
