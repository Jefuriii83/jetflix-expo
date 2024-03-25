import { ImageBackground, Pressable, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import categories from "../assets/data/categories";
import { FlatList } from "react-native-gesture-handler";
import { SliderProps } from "../types/data-prop";

const BannerSlider = () => {
  const laCasaDePapel = categories.items.find((category) =>
    category.movies.find((movie) => movie.title === "La Casa de Papel")
  );

  const { title, description, maturityRating } = laCasaDePapel?.movies.find(
    (movie) => movie.title === "La Casa de Papel"
  ) || { title: "", description: "", maturityRating: "" };

  return (
    <>
      <View className="w-full relative ms:h-96 mm:h-96 ml:h-96 tablet:h-[500px] ls:h-[590px] ll:h-[600px] xl:h-[1480px]">
        <ImageBackground
          resizeMode="cover"
          className="flex justify-center items-center w-full h-full opacity-40"
          source={{
            uri: "https://images8.alphacoders.com/107/1073623.jpg",
          }}
        />

        <View className="w-3/5 absolute bottom-10 px-16 ms:w-full ms:px-5 mm:w-full mm:px-5 mm:bottom-5 ml:w-full ml:px-5 ml:bottom-5 tablet:w-full tablet:bottom-8 ls:w-full ls:bottom-10  ll:bottom-12 ll:w-full xl:bottom-20 xl:w-full">
          <Text className="text-7xl font-medium text-white ms:text-3xl mm:text-3xl ml:text-3xl tablet:text-3xl ls:text-4xl ll:text-5xl xl:text-9xl">
            {title}
          </Text>
          <Text className="text-xl pt-4 text-white ms:text-xs mm:text-xs ml:text-xs tablet:text-sm xl:text-5xl ">
            {description}
          </Text>

          <View className="flex-row w-screen items-center h-5 justify-between mt-10 ms:h-2 xl:my-16">
            <View className="flex-row">
              <Pressable className="w-40 h-12 bg-white items-center justify-center flex-row px-6 mr-3 rounded-md ms:w-24 mm:w-28 ml:w-24 xl:h-28 xl:w-64">
                <Svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 ms:w-16"
                >
                  <Path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                </Svg>
                <Text className="text-xl ms:text-base">Play</Text>
              </Pressable>
              <Pressable className="w-40 h-12 bg-[#6D6D6EB3] items-center justify-center flex-row rounded-md ms:w-24 mm:w-28 ml:w-24 xl:h-28 xl:w-64">
                <Svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-8 h-8 ms:w-4 ms:h-4"
                >
                  <Path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </Svg>

                <Text className="text-white text-xl ms:text-xs mm:text-xs ml:text-xs ">
                  More Info
                </Text>
              </Pressable>
            </View>
            {/* <View className="flex-row h-full">
            <Pressable className="bg-transparent justify-center items-center rounded-full border-2 border-white w-10 h-full mr-5 ms:hidden mm:hidden ml:hidden tablet:hidden">
              <Svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6 ms:w-5 ms:h-5"
              >
                <Path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </Svg>
            </Pressable>
            <View className="h-full justify-center bg-[#33333399] w-32 border-l-4 border-white ms:hidden mm:hidden ml:hidden tablet:hidden ">
              <Text className="text-white text-xl text-center ">
                {maturityRating}
              </Text>
              </View>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default BannerSlider;
