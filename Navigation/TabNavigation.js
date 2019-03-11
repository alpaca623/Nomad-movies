import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import TVScreen from "../Screens/TV";
import MovieScreen from "../Screens/Movies";
import SearchScreen from "../Screens/Search";
import { BG_COLOR } from "../Constants/Colors";

import TabBarIcon from "../Components/TabBarIcon";

// 첫번째 매개변수는 RouteConfigs이고,
// 두번째 매개변수는 BottomTabNavigatorConfig이다.
// https://reactnavigation.org/docs/en/bottom-tab-navigator.html
const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: MovieScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <>
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-film" : "md-film"}
            />
          </>
        )
      }
    },
    TV: {
      screen: TVScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
