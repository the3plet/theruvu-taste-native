import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const FoodSpotDetail = () => {
    const {id}= useLocalSearchParams()
  return (
    <SafeAreaView>
      <Text>FoodSpotDetail with id:{id}</Text>
    </SafeAreaView>
  )
}

export default FoodSpotDetail