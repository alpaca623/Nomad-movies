import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../Screens/Detail/DetailPresenter";
import { headerStyle } from "./StackConfig";

const MainNavigation = createStackNavigator(
  {
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
  },
  {
    /*******************************
     * https://reactnavigation.org/docs/en/stack-navigator.html 참고
     * header가 렌더링 되는 방법을 정의한다. float, screen, none 세가지가 있다.
    *******************************/
    headerMode: "screen",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);
