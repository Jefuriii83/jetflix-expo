import { Text, View } from '../../../packages/components/Themed'
import { ScrollView } from 'react-native'
import React from 'react'
import MenuOptions from '../../../packages/components/MenuOptions'
import MenuButton from '../../../packages/components/MenuButton'
import MenuProfile from '../../../packages/components/MenuProfile'

const Menu = () => {
  return (
    <ScrollView className='bg-black'>
      <MenuProfile />
      <MenuButton name1='bell' name2='Notifications' name3='left' destination=''/>
      <MenuButton name1='check' name2='My List' name3="left" destination=''/>
      <MenuOptions />
     
    </ScrollView>
  )
}

export default Menu