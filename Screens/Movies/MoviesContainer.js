import React from "react";

import MoviesPresenter from "./MoviesPresenter";
import { movieApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount(){
    try{
      const upcoming = await movieApi.getUpcoming();
      // const nowPlaying = await movieApi.getNowPlaying();
      // const popular = await movieApi.getPopular();
      // const topRated = await movieApi.getTopRated();
    }catch{
      this.setState({
        error:"Can't find movies",
      });
    }finally{
      this.setState({
        loading:false
      })
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
