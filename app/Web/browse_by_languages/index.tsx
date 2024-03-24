import { FlatList, ScrollView, Text, View } from "react-native"
import Subheader from "../../../packages/components/Subheader"
import categories from "../../../packages/assets/data/categories"
import Card from "../../../packages/components/Card"
import Footer from "../../../packages/components/Footer"

const browseByLanguages = () => {
 return (
   <ScrollView>
   {/* <Navbar/> */}
   <Subheader genreTitle="Browse by Languages"/>

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
 )   
}
export default browseByLanguages