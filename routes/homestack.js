import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/HomeScreen'
import Collection from '../Screens/Collection'

const Screens ={
    HomeScreen:{
        screen:HomeScreen
    },
    Collection:{
        screen:Collection
    }
}

const HomeStack = createStackNavigator(Screens)

export default createAppContainer(HomeStack)
