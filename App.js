import React from "react";
import { Text } from "react-native";
import { AppLoading, Font } from "expo";
import { IonIcons } from "@expo/vector-icons";
import MainNavigation from "./Navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  // 로딩이 끝난 다음에 발생하는 함수
  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    // 앱이 로드 될 때 Font, Image같은 데이터들을 받아오도록 시킨다.
    await Font.loadAsync({
      ...IonIcons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      // 앱 로드 완료
      return (
        <>
          <MainNavigation />
        </>
      );
    } else {
      // 앱 로드 진행중
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
