import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../../packages/components/EditScreenInfo';
import { Text, View } from '../../../packages/components/Themed';
import SearchBar from '../../../packages/components/SearchBar';
import SearchItems from '../../../packages/components/SearchItems';

export default function TabTwoScreen() {
  return (
   <View className='flex-1 bg-black'>
    <SearchBar />
<ScrollView>
    <SearchItems />
    </ScrollView>
   </View>
  );
}

