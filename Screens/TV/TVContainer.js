import React from "react";

import TVPresenter from "./TVPresenter";
import Loader from "../../Components/Loader";
import { tv } from "../../api";

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null,
    error: null
  };

  async componentDidMount() {
    let loading, popular, topRated, airingToday;
    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: topRated }
      } = await tv.getTopRated());
      ({
        data: { results: airingToday }
      } = await tv.getPopular());
      console.log(popular);
    } catch (e) {
      console.log(e);
      error = "can't find tv shows";
    } finally {
      this.setState({
        loading: false,
        popular,
        topRated,
        airingToday
      });
    }
  }
  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <TVPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
