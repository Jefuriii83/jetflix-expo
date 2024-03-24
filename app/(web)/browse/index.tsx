import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

import Card from "../../../packages/components/Card";
import Footer from "../../../packages/components/Footer";
import categories from "../../../packages/assets/data/categories";
import BannerSlider from "@/packages/components/BannerSlider";

const homePage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      {/* <Navbar/> */}

      <View className="w-full h-full self-center flex">
       
        <BannerSlider
        
        />

        <ScrollView>
          {/* Cards */}
          <FlatList
            className="overflow-x-hidden"
            data={categories.items}
            renderItem={({ item }) => <Card category={item}></Card>}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </ScrollView>
      </View>
      <Footer></Footer>
    </View>
  );

};

export default homePage;
