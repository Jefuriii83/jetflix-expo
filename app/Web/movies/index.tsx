import { FlatList, ScrollView, Text, View } from "react-native"
import Footer from "../../../packages/components/Footer";
import categories from "../../../packages/assets/data/categories";
import Card from "../../../packages/components/Card";
import Subheader from "../../../packages/components/Subheader";

const movies = () => {
  return (
    <ScrollView>
      {/* <Navbar/> */}
      <Subheader genreTitle="Movies"/>

      <View className="w-11/12 mt-5 h-auto self-center flex">
        

        {/* Cards */}
        <FlatList
          // className="overflow-x-hidden"
          data={categories.items}
          renderItem={({ item }) => <Card category={item}></Card>}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <Footer></Footer>
    </ScrollView>
  );
}
export default movies