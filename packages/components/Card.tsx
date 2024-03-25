import React, { useState } from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { AntDesign, Entypo, EvilIcons, Octicons } from "@expo/vector-icons";
import MoreLikeThis from "./MoreLikeThis";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ReviewItem from "./ReviewItem";
import movies from "../assets/data/movie";
import VideoPlayer from "./VideoPlayer";
import { HomeProps } from "../types/data-prop";
import Svg, { Path } from "react-native-svg";

const movie = movies.seasons.items[0];

const Card = (props: HomeProps) => {
  const { category } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [index, setIndex] = useState(0);
  const [currentMovie, setMovie] = useState(movie.episodes.items[0]);

  const routes = [
    { key: "moreLikeThis", title: "More Like This" },
    { key: "reviews", title: "Reviews" },
  ];

  const renderScene = SceneMap({
    moreLikeThis: MoreLikeThis,
    reviews: () => (
      <View className="bg-black">
        <View className="items-end bg-black">
          <TouchableOpacity className="bg-gray-600 p-3 w-32 rounded-lg my-2 items-center justify-center">
            <Text className="">Write a review</Text>
          </TouchableOpacity>
          <ReviewItem />
        </View>
      </View>
    ),
  });

  return (
    <>
      <Text className="text-white text-base font-bold ms:text-sm xl:text-4xl">
        {category.title}
      </Text>

      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setSelectedMovie(item);
              setModalVisible(true);
            }}
            className="w-auto h-auto rounded-xl"
          >
            <Image
              source={{ uri: item.poster }}
              className="w-64 h-96 rounded-xl m-1 ms:w-44 ms:h-64 mm:w-44 mm:h-64 ml:w-44 ml:h-64 xl:w-[400px] xl:h-[600px]"
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView className="h-full">
          <View className="flex justify-center items-center m-auto relative my-14">
            {selectedMovie && (
              <View className="bg-black rounded-2xl w-full h-auto ms:w-[300px] mm:h-auto mm:w-[330px] ml:w-[380px] tablet:w-[600px] ls:w-[800px] ll:w-[980px] xl:w-[1800px]">
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  className="rounded-2xl absolute right-20 top-10 z-10 ms:top-8 ms:right-5 mm:top-7 mm:right-5 ml:top-8 ml:right-6 tablet:right-8"
                >
                  <AntDesign name="closecircleo" size={24} color="#C4C4C4" />
                </Pressable>
                <Image
                  className="mt-5 w-full h-[540px] self-center ms:h-52 mm:h-52  ml:h-56 tablet:h-80 ls:h-[440px] ll:h-[580px] xl:h-[1040px]"
                  source={{ uri: selectedMovie.banner }}
                />
                <View className="h-12 flex-row items-center w-full px-5 ms:bottom-10 mm:h-8 mm:bottom-10 ml:h-10 ml:bottom-14 tablet:h-10 tablet:bottom-20 ls:h-12 ls:bottom-20 ll:h-14 ll:bottom-20 xl:h-20 xl:bottom-24">
                  <Pressable className="bg-[#727171d8] w-32 h-full rounded-md flex-row justify-center items-center ms:w-24 mm:w-26 tablet:w-28 ls:w-36 ll:w-44 xl:w-56">
                    <Svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6 xl:w-10 xl:h-10"
                    >
                      <Path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                    </Svg>

                    <Text className="text-base font-medium text-white xl:text-4xl">
                      Play
                    </Text>
                  </Pressable>
                  <Pressable className="h-full items-center justify-center p-4 xl:hidden">
                    <AntDesign name="checkcircleo" size={24} color="#909090" />
                  </Pressable>
                  <Pressable className="p-0.5 items-center justify-center border-2 border-[#909090] rounded-full xl:mx-5">
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#909090"
                      className="w-5 h-5 xl:w-20 xl:h-20"
                    >
                      <Path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </Svg>
                  </Pressable>
                  {/* <Pressable className="items-center justify-center right-5 border-2 border-[#909090] rounded-full p-2 absolute tablet:right-8 ls:right-8 ll:right-20">
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#909090"
                      className="w-4 h-4"
                    >
                      <Path d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </Svg>
                  </Pressable> */}
                </View>

                <View className=" w-full px-5 flex-row ms:flex-col mm:flex-col ml:flex-col xl:flex-col">
                  <View className="flex-col xl:w-full">
                    <Text className="text-white text-2xl absolute -top-10  font-bold ms:text-xl ms:-top-7 mm:-top-10 ml:text-xl tablet:text-2xl ls:text-2xl ll:text-4xl ll:-top-12 xl:text-6xl xl:-top-16">
                      {selectedMovie.title}
                    </Text>
                    <View className="flex-row gap-x-6">
                      <Text className="text-[#BCBCBC] text-base ms:text-xs mm:text-sm ml:text-sm ls:text-sm ll:text-lg xl:text-3xl">
                        {selectedMovie.year}
                      </Text>
                      <Text className="text-[#BCBCBC] text-base ms:text-xs mm:text-sm ml:text-sm ls:text-sm ll:text-lg xl:text-3xl">
                        {selectedMovie.episodes} episodes
                      </Text>
                    </View>

                    <Text className="text-white py-0.5 my-2 text-base border-2 border-[#BCBCBC] w-16 text-center ms:text-xs mm:text-sm ml:text-sm xl:text-3xl xl:p-4 xl:w-40 xl:my-5 ">
                      {selectedMovie.maturityRating}
                    </Text>
                    <Text className="text-white w-96 ms:text-xs ms:w-64 ms:mb-2 mm:w-[312px] mm:text-sm mm:mb-2 ml:mb-2 ml:w-[360px] ls:w-[400px] ls:text-sm ll:text-base xl:text-3xl xl:w-full ">
                      {selectedMovie.description}
                    </Text>
                  </View>

                  <View className="flex-col ms:flex-row mm:flex-row ml:flex-row tablet:w-40 xl:mt-8 ">
                    <Text className="text-white ms:text-xs mm:text-xs ml:text-xs ls:text-sm ll:text-lg xl:text-3xl">
                      <Text className="text-[#BCBCBC]">Cast:</Text>{" "}
                      {selectedMovie.casts.join(", ")}
                    </Text>
                    <Text className="text-white ms:text-xs mm:text-xs ml:text-xs ls:text-sm ll:text-lg xl:text-3xl">
                      <Text className="text-[#BCBCBC]">Genre:</Text>{" "}
                      {selectedMovie.genre.join(", ")}
                    </Text>
                  </View>
                </View>

                <View className="py-5 px-5">
                  {/* <Text className="text-white font-bold text-lg ms:text-base ls:text-lg ll:text-xl xl:text-4xl">
                    More Like This
                  </Text> */}

                  <View className="flex-1">
                    <TabView
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={{ width: Dimensions.get("window").width }}
                      renderTabBar={(props) => (
                        <TabBar
                          {...props}
                          style={{ backgroundColor: "black" }}
                          indicatorStyle={{ backgroundColor: "red", top: 0 }}
                          
                        />
                      )}
                    />
                  </View>

                  <MoreLikeThis />
                </View>

                <View className="py-5 border-t-2 border-white px-5">
                  <Text className="text-2xl text-white  ms:text-xl xl:text-6xl xl:mb-4">
                    About{" "}
                    <Text className="font-bold">{selectedMovie.title}</Text>
                  </Text>
                  <Text className="text-[#BCBCBC] ms:text-xs mm:text-xs ml:text-xs xl:text-3xl">
                    Cast: {selectedMovie.casts.join(", ")}
                  </Text>
                  <Text className="text-[#BCBCBC] ms:text-xs mm:text-xs ml:text-xs xl:text-3xl">
                    Genres: {selectedMovie.genre.join(", ")}
                  </Text>
                  <Text className="text-[#BCBCBC] ms:text-xs mm:text-xs ml:text-xs xl:text-3xl">
                    Maturity rating: {selectedMovie.maturityRating}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};

export default Card;
