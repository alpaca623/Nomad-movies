import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import TVScreen from "../screens/TV";
import MovieScreen from "../screens/Movies";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../Constants/Colors";

const TabNavigation = createBottomTabNavigator(
  {
    MovieScreen,
    TVScreen,
    SearchScreen
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
