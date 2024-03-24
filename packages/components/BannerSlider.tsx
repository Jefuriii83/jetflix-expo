import { ImageBackground, Pressable, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import categories from "../assets/data/categories";
import { FlatList } from "react-native-gesture-handler";

type SliderProps = {
  title: string;
  description: string;
  maturityNumber: string;
};

const BannerSlider = () => {
  const laCasaDePapel = categories.items.find((category) =>
    category.movies.find((movie) => movie.title === "La Casa de Papel")
  );

  const { title, description, maturityRating } = laCasaDePapel?.movies.find(
    (movie) => movie.title === "La Casa de Papel"
  ) || { title: "", description: "", maturityRating: "" };

  return (
    <>
      <View className="w-full h-[790px] relative">
        <ImageBackground
          resizeMode="cover"
          className="flex justify-center items-center w-full h-full opacity-40"
          source={{
            uri: "https://images8.alphacoders.com/107/1073623.jpg",
          }}
        />

        <View className="w-3/5 h-64 absolute bottom-32 px-16">
          <Text className="text-7xl text-white">{title}</Text>
          <Text className="text-xl text-white">{description}</Text>
        </View>

        <View className="flex-row w-screen items-center h-10 absolute bottom-12 pl-16 justify-between">
          <View className="flex-row">
            <Pressable className="w-40 h-12 bg-white items-center justify-center flex-row px-6 mr-3 rounded-md">
              <Svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <Path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
              </Svg>
              <Text className="text-xl">Play</Text>
            </Pressable>
            <Pressable className="w-40 h-12 bg-[#6D6D6EB3] items-center justify-center flex-row rounded-md">
              <Svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-8 h-8"
              >
                <Path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </Svg>

              <Text className="text-white text-xl">More Info</Text>
            </Pressable>
          </View>
          <View className="flex-row h-full">
            <Pressable className="bg-transparent justify-center items-center rounded-full border-2 border-white w-10 h-full mr-5">
              <Svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <Path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </Svg>
            </Pressable>
            <View className="h-full justify-center bg-[#33333399] w-32 border-l-4 border-white ">
              <Text className="text-white text-xl text-center ">
                {maturityRating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default BannerSlider;
