import { View } from "../../../packages/components/Themed";
import { Image, FlatList, ScrollView } from "react-native";
import categories from "../../../packages/assets/data/categories";
import HomeCategories from "../../../packages/components/HomeCategories";
import HeaderHome from "../../../packages/components/HeaderHome";
import CardButtons from "../../../packages/components/CardButtons";

const TabOneScreen = () => {
  return (
    <View className="flex-1">
      
      <ScrollView className="bg-black">
        

<View className=" justify-center items-center bg-black">
        <Image
          className="h-[500] w-[320] bg-black"
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg",
          }}
        />
        <HeaderHome title="JetFlix"/>
      <CardButtons />
      </View>

      <FlatList
        className="pt-5"
        data={categories.items}
        renderItem={({ item }) => <HomeCategories category={item} />}
      />
</ScrollView>
</View>
  );
};

export default TabOneScreen;