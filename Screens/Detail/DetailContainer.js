import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { id, voteAvg, posterPhoto, backdropPhoto, title, overview }
        }
      }
    } = props;
    this.state = {
      id,
      voteAvg,
      posterPhoto,
      backdropPhoto,
      title,
      overview
    };
  }
  render() {
    const {
      id,
      voteAvg,
      posterPhoto,
      backdropPhoto,
      title,
      overview
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        voteAvg={voteAvg}
        posterPhoto={posterPhoto}
        backdropPhoto={backdropPhoto}
        title={title}
        overview={overview}
      />
    );
  }
}
