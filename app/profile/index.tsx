import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
// import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../packages/components/ProfileCard";
import profiles from "../../packages/assets/data/profiles";
import { Platform } from "react-native";
import { MonoText } from "../../packages/components/StyledText";

const profile = () => {
  const { id } = useLocalSearchParams();
  const isWeb = Platform.OS === "web";

  return isWeb ? (
    <View className=" bg-black flex h-full w-full items-center justify-center ">
      <Text className="text-white text-center py-9 ms:text-3xl mm:text-3xl ml:text-3xl tablet:text-3xl ls:text-4xl ll:text-5xl xl:text-7xl xl:py-10">
        Who's watching?
      </Text>
      {/* AvatarCard */}
      <View className="flex-row flex-wrap ms:w-52 mm:w-56 ml:w-60">
        {profiles.profile.map((item) => (
          <ProfileCard profile={item} key={item.name} />
        ))}
      </View>

      <Pressable className="self-center">
        Manage Profile
        <Text className="border text-gray-400 border-gray-400 mt-7 mb-4 px-7 py-2 ms:text-sm ms:mt-6 ms:mb-3 mm:mt-6 mm:mb-3 ml:mt-6 ml:mb-3 mm:text-sm ml:text-sm tablet:mt-6 tablet:mb-3 tablet:text-sm ls:mt-6 ls:mb-3 ls:text-sm ll:mt-8 ll:mb-4 ll:text-lg xl:text-2xl xl:px-11 xl:py-4">
          Manage Profile
        </Text>
      </Pressable>
    </View>
  ) : (
    <View className=" bg-black flex h-full w-full items-center justify-center ">
      <Text className="text-white text-center text-6xl my-7 ms:text-3xl ms:my-5 mm:text-3xl ml:text-3xl ml:my-5 tablet:text-3xl ls:text-4xl ll:text-5xl xl:text-9xl">
        Who's watching?
      </Text>
      {/* AvatarCard */}
      <View className="ms:w-64 ms:h-64 my-[9px] mm:w-[300px] mm:my-3 mm:flex-wrap ml:w-[320px] ml:my-3 ">
        <FlatList
          className="ms:w-full"
          data={profiles.profile}
          renderItem={({ item }) => <ProfileCard profile={item}></ProfileCard>}
          horizontal
        ></FlatList>
      </View>

      <Pressable className="self-center">
        <Text className="border text-gray-400 border-gray-400 mt-7 mb-4 ms:text-sm ms:mt-6 ms:mb-3 mm:mt-6 mm:mb-3 ml:mt-6 ml:mb-3 mm:text-sm ml:text-sm tablet:mt-6 tablet:mb-3 tablet:text-sm ls:mt-6 ls:mb-3 ls:text-sm ll:mt-8 ll:mb-4 ll:text-lg xl:text-2xl">
          Manage Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default profile;
