import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from './TabNavigation';
import DetailScreen from '../Screens/Detail';

const MainNavigation = createStackNavigator({
  Tabs : {
    screen : TabNavigation,
    navigationOptions : {
      header : null
    }
  },
  Detail : {
    screen : DetailScreen,
    navigationOptions : {

    }
  }
})

export default createAppContainer(MainNavigation);