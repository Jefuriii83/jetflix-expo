import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../packages/components/ProfileCard";
import Navbar from "../../packages/components/Navbar";
import Card from "../../packages/components/Card";
import Footer from "../../packages/components/Footer";

import categories from "../../packages/assets/data/categories";
import movie from "../../packages/assets/data/movie";

const homePage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      {/* <Navbar/> */}

      <View className="w-11/12 h-full self-center flex">
        {/* Header Card */}
        <View className="h-[590px] w-full justify-center items-center ">
        <Image
          className="flex justify-center items-center h-full w-full bg-black"
          source={{
            uri: "https://assetsio.gnwcdn.com/-1574325374907.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
          }}
        />
          {/* <Image 
          source={}
          className="w-full h-[590px] bg-gradient-to-r from-black"></Image> */}
        </View>

        {/* Cards */}
        <FlatList
          className="overflow-x-hidden"
          data={categories.items}
          renderItem={({ item }) => <Card category={item}></Card>}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <Footer></Footer>
    </View>
  );

  // return(
  //   <View className="w-11/12 h-auto self-center flex ">
  //       {/* Header Card */}
  //       <View className="h-[590px] w-full ">
  //         {/* <Image 
  //         source={}
  //         className="w-full h-[590px] bg-gradient-to-r from-black"></Image> */}
  //       </View>

  //       {/* Cards */}
  //       <FlatList
  //         className="overflow-x-hidden"
  //         data={categories.items}
  //         renderItem={({ item }) => <Card category={item}></Card>}
  //         showsHorizontalScrollIndicator={false}
  //       ></FlatList>
  //     </View>
  // )
};

export default homePage;
