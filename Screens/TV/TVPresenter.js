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

const TVPresenter = ({ loading, popular, onAirWeek, airingToday }) =>
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
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                voteAvg={tv.vote_average}
                title={tv.name}
                overview={tv.overview}
                
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                voteAvg={tv.vote_average}
                title={tv.name}
                overview={tv.overview}
              />
            ))}
        </Section>
      ) : null}
      {onAirWeek ? (
        <Section title="On Air Week">
          {onAirWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                voteAvg={tv.vote_average}
                title={tv.name}
                overview={tv.overview}
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
