import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import PropTypes from "prop-types";

import Layout from "../Constants/Layout";
import MovieSlide from "./MovieSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              overview={movie.overview}
              id={movie.id}
              backdropPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
              title={movie.title}
              voteAvg={movie.vote_average}
            />
          </View>
        ))}
    </Swiper>
  ) : null

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
