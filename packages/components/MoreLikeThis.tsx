import React from "react";

import { FlatList } from "react-native-gesture-handler";

import categories from "../assets/data/categories";
import { Dimensions, Image, Platform, View } from "react-native";

const MoreLikeThis = () => {
  const series = categories.items[0];
  const windowWidth = Dimensions.get("window").width;
  const size = Platform.OS === "web" ? windowWidth / 5 : 130;

  return (
    <View className="justify-center items-center bg-black">
      <FlatList
        className=""
        data={series.movies}
        renderItem={({ item }) => (
          <Image
            className="w-28 h-40 object-cover rounded-md m-1 items-center justify-center tablet:w-[225px] tablet:h-[300px]"
            source={{ uri: item.poster }}
          />
        )}
        numColumns={3}
      />
      
    </View>
  );
};

export default MoreLikeThis;
