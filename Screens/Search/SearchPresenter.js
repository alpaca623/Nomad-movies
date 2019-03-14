import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { BG_COLOR, GREY_COLOR } from "../../Constants/Colors";
import Loader from "../../Components/Loader";
import Layout from "../../Constants/Layout";

import Section from "../../Components/Section";
import MovieItem from "../../Components/MovieItem";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  width: ${Layout.width / 2};
  text-align: center;
  padding: 10px;
`;

const ResultContainer = styled.ScrollView`
  margin-top: 20px;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  handleSubmit
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        placeholder="Search Movies and TV"
        placeholderTextColor={GREY_COLOR}
        value={searchTerm}
        onSubmitEditing={handleSubmit}
      />
    </InputContainer>
    <ResultContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Finded Movies">
                {movieResults
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
            ) : null
          ) : null}
          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="Finded Tv Shows">
                {tvResults
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
            ) : null
          ) : null}
        </>
      )}
    </ResultContainer>
  </Container>
);

SearchPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};

export default SearchPresenter;
