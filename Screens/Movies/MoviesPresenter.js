import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";
import MovieSlider from "../../Components/MovieSlider";
import { BG_COLOR } from "../../Constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, nowPlaying, popular }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={nowPlaying} />
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  nowPlaying: PropTypes.array,
  popular: PropTypes.array
};

export default MoviesPresenter;
