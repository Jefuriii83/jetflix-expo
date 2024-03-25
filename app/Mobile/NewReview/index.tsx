import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const NewReview = () => {
  const [review, setReview] = useState('')

  const handleReviewChange = (text: string) => {
    const words = text.trim().split(/\s+/)
    if (words.length <= 25) {
      setReview(text)
    }
  }

  const remainingWords = 25 - review.trim().split(/\s+/).length

  return (
    <View>
      <View className='bg-black h-screen'>
        <Text className='text-white text-lg font-bold pb-5 ml-4'>Write your review</Text>
        <View className="flex-row border border-gray-300 self-center rounded bg-gray-700 relative w-11/12 mx-1">
          <TextInput
            className="h-40 px-4 bg-transparent text-white items-start justify-start"
            placeholder="Comment here..."
            placeholderTextColor="#999"
            value={review}
            onChangeText={handleReviewChange}
            multiline
          />
        </View>

        <Text className='text-gray-400 ml-4 self-end pr-4'>{remainingWords} words remaining</Text>

        <View>
          <TouchableOpacity className='bg-red-500 m-5 p-2 rounded-lg self-end'>
            <Text className='text-white font-semibold'>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  )
}

export default NewReview
