import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";
import MovieSlider from "../../Components/MovieSlider";
import MovieItem from "../../Components/MovieItem";
import Section from "../../Components/Section";
import { BG_COLOR } from "../../Constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, nowPlaying, popular }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                voteAvg={movie.vote_average}
                title={movie.title}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  nowPlaying: PropTypes.array,
  popular: PropTypes.array
};

export default MoviesPresenter;
