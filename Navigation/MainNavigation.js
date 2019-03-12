import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../Screens/Detail";
import { headerStyle } from "./StackConfig";

const MainNavigation = createStackNavigator({
  // 기본적으로 screen에 지정된 컴포넌트는 navigator props를 전달받는다.
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      ...headerStyle
    }
  }
},{
  headerMode : 'screen',
  headerBackTitleVisible : false
});

export default createAppContainer(MainNavigation);
