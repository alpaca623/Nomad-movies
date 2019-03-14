import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { WHITE } from "../Constants/Colors";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";

const Container = styled.View`
  padding-right: 20px;
  align-items: center;
`;

const Title = styled.Text`
  color: ${WHITE};
  margin: 10px 0;
`;

const MovieItem = ({ voteAvg, title, image }) => (
  <Container>
    <MoviePoster path={image} />
    <Title>{title.length > 15 ? `${title.substring(0, 14)}...` : title}</Title>
    <MovieRating vote={voteAvg} />
  </Container>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  voteAvg: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default MovieItem;
