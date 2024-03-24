import { Slot } from "expo-router";
import Navbar from "@/packages/components/Navbar";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeLayout() {
  return (
    <>
      <ScrollView className="bg-black">
        <Navbar />
        <Slot />
      </ScrollView>
    </>
  );
}
