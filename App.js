import React from "react";
import { AppLoading, Font } from "expo";
import { IonIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  // 로딩이 끝난 다음에 발생하는 함수
  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...IonIcons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Hello!</Text>
        </View>
      );
    } else {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
