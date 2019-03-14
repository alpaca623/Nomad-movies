import React from "react";

import SearchPresenter from "./SearchPresenter";

import {movies, tv} from '../../api';

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: null,
    error:null
  };

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  handleSubmit = async() => {
    const { searchTerm } = this.state;
    let movieResults, tvResults, error;
    if (searchTerm !== null) {
      this.setState({
        loading:true
      })
      try{
        ({data : {results : movieResults}} = await movies.searchMovie(searchTerm));
        ({data : {results : tvResults}} = await tv.searchTv(searchTerm));
      }catch{
        error = "Question Administrator";
      }finally{
        this.setState({
          loading:false,
          movieResults,
          tvResults
        })
      }
    }else{
      alert('please search text input');
    }
    return;
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
