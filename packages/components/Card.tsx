import React, { useState } from "react";
import { Modal, Pressable, View, Text, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { AntDesign, Entypo, EvilIcons, Octicons } from "@expo/vector-icons";
import MoreLikeThis from "./MoreLikeThis";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ReviewItem from "./ReviewItem";
import movies from "../assets/data/movie";
import VideoPlayer from "./VideoPlayer";

interface HomeProperties {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      title?: string;
      year?: number;
      episodes?: number;
      maturityRating?: string;
      description?: string;
      poster?: string;
      banner?: string;
      casts?: string[];
      genre?: string[];
    }[];
  };
}

const movie = movies.seasons.items[0];

const Card = (props: HomeProperties) => {
  const { category } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [index, setIndex] = useState(0);
  const [currentMovie, setMovie] = useState(movie.episodes.items[0]);


  const routes = [
    { key: 'moreLikeThis', title: 'More Like This' },
    { key: 'reviews', title: 'Reviews' },
  ];

  const renderScene = SceneMap({
    moreLikeThis: MoreLikeThis,
    reviews: () => (
      <View className="bg-black">
        <View className='items-end bg-black'>
          <TouchableOpacity
            className='bg-gray-600 p-3 w-32 rounded-lg my-2 items-center justify-center'
          >
            <Text>Write a review</Text>
          </TouchableOpacity>
          <ReviewItem />
        </View>
      </View>
    ),
  });

  return (
    <>
      <Text className="text-white text-base font-bold ms:text-sm xl:text-4xl">{category.title}</Text>

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
        <ScrollView>
          <View className="flex-1">
            <View className="flex-1 bg-black bg-opacity-50">
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="absolute top-5 right-5 z-10"
              >
                <AntDesign name="closecircleo" size={30} color="#C4C4C4" />
              </Pressable>
              
              {selectedMovie && (
                <View className="flex-1">

                  <View className="mt-5 w-full h-[540px] self-center rounded-xl ms:h-48 ms:w-28 mm:h-48 mm:w-28 ml:h-52 ml:w-28 tablet:h-64 tablet:w-48">

      <VideoPlayer episode={currentMovie} />
      </View>
                  {/* <Image
                    source={{ uri: selectedMovie.banner }}
                    className="mt-5 w-full h-[540px] self-center rounded-xl ms:h-48 ms:w-28 mm:h-48 mm:w-28 ml:h-52 ml:w-28 tablet:h-64 tablet:w-48"
                  /> */}

                  <View className="h-12 flex-row items-center bottom-16 left-5 w-full">
                    <Pressable className="bg-white w-32 h-full rounded-md flex-row justify-center items-center">
                      <Entypo name="controller-play" size={30} color="black" />
                      <Text className="text-base font-medium">Play</Text>
                    </Pressable>
                    <Pressable className="h-full items-center justify-center p-4 ">
                      <AntDesign name="checkcircleo" size={30} color="#909090" />
                    </Pressable>
                    <Pressable className="items-center justify-center border-2 border-[#909090] rounded-full ">
                      <EvilIcons name="like" size={30} color="#909090" />
                    </Pressable>
                    <Pressable className="h-30 items-center justify-center right-10 border-2 border-[#909090] rounded-full p-2 absolute">
                      <Octicons name="mute" size={24} color="#909090" />
                    </Pressable>
                  </View>

                  <View className="flex-row">
                    <View className="flex-col w-3/5">
                      <Text className="text-white text-2xl absolute -top-10 font-bold">{selectedMovie.title}</Text>
                      <View className="flex-row gap-x-6">
                        <Text className="text-[#BCBCBC] text-base ">{selectedMovie.year}</Text>
                        <Text className="text-[#BCBCBC] text-base">{selectedMovie.episodes} episodes</Text>
                      </View>

                      <Text className="text-white py-0.5 my-2 text-base border-2 border-[#BCBCBC] w-16 text-center r">{selectedMovie.maturityRating}</Text>
                      <Text className="text-white w-96">{selectedMovie.description}</Text>
                    </View>

                    <View className="flex-col w-2/5">
                      <Text className="text-white">
                        <Text className="text-[#BCBCBC]">Cast:</Text> {selectedMovie.casts.join(', ')}
                      </Text>
                      <Text className="text-white">
                        <Text className="text-[#BCBCBC]">Genre:</Text> {selectedMovie.genre.join(', ')}
                      </Text>
                    </View>
                  </View>

                  <View className="flex-1">
                    <TabView
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={{ width: Dimensions.get('window').width }}
                      renderTabBar={(props) => (
                        <TabBar
                          {...props}
                          style={{ backgroundColor: 'black' }}
                          indicatorStyle={{ backgroundColor: 'red', top: 0 }}
                        />
                      )}
                    />
                  </View>

                  <View className="py-5 border-t-2 border-white">
                    <Text className="text-2xl text-white">About <Text className="font-bold">{selectedMovie.title}</Text></Text>
                    <Text className="text-[#BCBCBC]">Creators:</Text>
                    <Text className="text-[#BCBCBC]">Cast: {selectedMovie.casts.join(', ')}</Text>
                    <Text className="text-[#BCBCBC]">Genres: {selectedMovie.genre.join(', ')}</Text>
                    <Text className="text-[#BCBCBC]">Maturity rating: {selectedMovie.maturityRating}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};

export default Card;
