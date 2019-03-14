import React from "react";

import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    nowPlaying: null,
    popular: null,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: upcoming }
      } = await movies.getUpcoming();
      const {
        data: { results: nowPlaying }
      } = await movies.getNowPlaying();
      const {
        data: { results: popular }
      } = await movies.getPopular();
      this.setState({
        upcoming: upcoming,
        nowPlaying: nowPlaying,
        popular: popular
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: "Can't find movies"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
