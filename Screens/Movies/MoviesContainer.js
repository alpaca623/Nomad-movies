import React from "react";

import MoviesPresenter from "./MoviesPresenter";
import Loader from "../../Components/Loader";
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
    } catch {
      error = "Can't find movies";
    } finally {
      this.setState({
        loading:false,
        upcoming,
        nowPlaying,
        popular,
        error
      });
    }
  }

  render() {
    const { loading, upcoming, nowPlaying, popular } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        nowPlaying={nowPlaying}
        popular={popular}
      />
    );
  }
}
