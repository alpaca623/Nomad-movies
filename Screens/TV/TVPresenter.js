import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MovieItem from "../../Components/MovieItem";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import { BG_COLOR } from "../../Constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                image={tv.poster_path}
                voteAvg={tv.vote_average}
                title={tv.name}
              />
            ))}
        </Section>
      ) : null}
      {topRated ? (
        <Section title="Top Rated">
          {topRated
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                image={tv.poster_path}
                voteAvg={tv.vote_average}
                title={tv.name}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresenter.prototype = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
