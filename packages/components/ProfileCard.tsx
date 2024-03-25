import { router } from "expo-router"; // Fix import statement
import { TouchableOpacity, View, Text, Image, Pressable } from "react-native";
import profiles from "../../packages/assets/data/profiles";
import { Platform } from "react-native";
import { ProfileProps } from "../types/data-prop";


const ProfileCard = (props: ProfileProps) => {
  const { profile } = props;

  const isWeb = Platform.OS === "web";

    // const profileAction = router.navigate({
    //  pathname: "./Mobile/(tabs)",
    //   params: { id: "" },
    // });

  //Conditionally render based on platform
   const profileAction =
     Platform.OS === "web"
     ? () => {
           router.navigate({
             pathname: "/(web)/browse",
           });
         }
       : () => {
           router.navigate({
             pathname: "./Mobile/(tabs)",
             params: { id: "" },
           });
        };

  return isWeb ? (
    <View className="flex">
      <Pressable
        onPress={profileAction}
        style={{ marginHorizontal: Platform.OS === "web" ? 4 : 8 }}
      >
        <View className="group flex-row w-44 mx-auto items-center justify-center ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-24 tablet:h-24 ls:h-24 ls:w-24 ll:h-28 ll:w-28 xl:w-50 xl:h-50 ">
          <Image
            source={{ uri: profile.avatar }}
            className="w-40 h-40 rounded-md flex ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-24 ml:w-24 tablet:w-24 tablet:h-24 ls:w-24 ls:h-24 ll:w-28 ll:h-28 xl:w-50 xl:h-50"
          />
        </View>
        <Text className="text-center text-[#808080] pt-2 pb-10 ms:text-xs mm:text-xs ml:text-xs tablet:text-xs ls:text-sm ll:text-lg xl:text-2xl">
          {profile.name}
        </Text>
      </Pressable>
    </View>
  ) : (
    <View className="flex">
      <Pressable
        onPress={profileAction}
        style={{ marginHorizontal: Platform.OS === "web" ? 4 : 8 }}
      >
        <View className="group flex-row w-44 mx-auto items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96">
          <Image
            source={{ uri: profile.avatar }}
            className="w-44 h-44 rounded-md flex ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 2,
            paddingBottom: 10,
            // fontSize: Platform.OS === "web" ? 16 : 14,
          }}
          className="xl:text-5xl"
        >
          {profile.name}
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;
