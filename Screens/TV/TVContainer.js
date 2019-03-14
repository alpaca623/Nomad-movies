import React from "react";

import TVPresenter from "./TVPresenter";
import Loader from "../../Components/Loader";
import { tv } from "../../api";

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    onAirWeek: null,
    airingToday: null,
    error: null
  };

  async componentDidMount() {
    let loading, popular, onAirWeek, airingToday;
    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: onAirWeek }
      } = await tv.getOnAirWeek());
      ({
        data: { results: airingToday }
      } = await tv.getPopular());
    } catch (e) {
      console.log(e);
      error = "can't find tv shows";
    } finally {
      this.setState({
        loading: false,
        popular,
        onAirWeek,
        airingToday
      });
    }
  }
  render() {
    const { loading, popular, onAirWeek, airingToday } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <TVPresenter
        loading={loading}
        popular={popular}
        onAirWeek={onAirWeek}
        airingToday={airingToday}
      />
    );
  }
}
