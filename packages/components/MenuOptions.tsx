import { Pressable } from 'react-native'
import { Text, View } from './Themed'
import React from 'react'
import { Feather, MaterialIcons} from '@expo/vector-icons';


const MenuOptions = () => {
  return (
    <View className='tablet:items-center tablet:justify-center bg-black'>

       <View className='pl-2 pt-2 bg-gray-900 justify-end tablet:justify-center tablet:items-center tablet:rounded-t-lg space-y-4 tablet:px-48'>
      <Pressable className='flex-row space-x-2'>
      <Feather name="settings" size={24} color="white" />
        <Text className='text-lg text-white tablet:text-xl'>App Setings</Text>
      </Pressable>
      <Pressable className='flex-row space-x-2'>
      <Feather name="shield" size={24} color="white" />
        <Text className='text-lg text-white tablet:text-xl'>Privacy</Text>
      </Pressable>
      <Pressable className='flex-row space-x-2'>
      <MaterialIcons name="help-outline" size={24} color="white" />
        <Text className='text-lg text-white tablet:text-xl'>Help</Text>
      </Pressable>
      <Pressable className='flex-row space-x-2'>
      <Feather name="log-out" size={24} color="white" />
        <Text className='text-lg text-white mb-56 tablet:text-xl tablet:mb-2'>Sign Out</Text>
      </Pressable>

    </View>

    </View>
  )
}

export default MenuOptions;