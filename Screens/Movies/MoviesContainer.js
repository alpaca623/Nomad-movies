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
    let upcoming, nowPlaying, popular, error;
    try {
      ({
        data: { results: upcoming }
      } = await movies.getUpcoming());
      ({
        data: { results: nowPlaying }
      } = await movies.getNowPlaying());
      ({
        data: { results: popular }
      } = await movies.getPopular());
    } catch{
      error = "Can't find movies";
    } finally {
      this.setState({
        loading: false,
        upcoming: upcoming,
        nowPlaying: nowPlaying,
        popular: popular,
        error
      });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
