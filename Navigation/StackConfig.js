import { createStackNavigator } from "react-navigation";
import { BG_COLOR, WHITE } from "../Constants/Colors";

// 모든 header는 동일하므로, Detail화면의 header도 똑같은 스타일을 주기 위해 style을 따로 만들었다.
export const headerStyle = {
  headerStyle: {
    backgroundColor: BG_COLOR
  },
  headerTitleStyle: {
    color: WHITE
  }
};

// 메인 탭의 화면을 stackNavigator으로 만들어서 리턴시킨다.
export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyle
      }
    }
  });
