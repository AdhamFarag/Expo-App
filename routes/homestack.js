import React from 'react';
import { View, Text, ImagePropTypes } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import Collection from '../Screens/Collection';
import DetailsOfItem from '../Screens/DetailsOfItem';

const Screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  Collection: {
    screen: Collection,
  },
  DetailsOfItem: {
    screen: DetailsOfItem,
  },
};

const HomeStack = createStackNavigator(Screens, {
  defaultNavigationOptions: {
    header: null,
  },
});

export default createAppContainer(HomeStack);
