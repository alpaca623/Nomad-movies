import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../makePhotoUrl";
import Layout from "../Constants/Layout";
import MoviePoster from "./MoviePoster";

import { WHITE } from "../Constants/Colors";
import MovieRating from "./MovieRating";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 30px;
  align-items: center;
`;

const Item = styled.View`
  width: 60%;
  align-items:flex-start;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${WHITE};
`;

const Overview = styled.Text`
  font-size: 12px;
  color: ${WHITE};
  margin-bottom: 10px;
`;

const BtnComponent = styled.TouchableOpacity`
  padding:5px;
  border-radius:1.5;
  background-color: #e74c3c;
`;

const BtnText = styled.Text`
  color: ${WHITE};
`;

const MovieSlide = ({ id, title, voteAvg, overview, backdrop, poster }) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backdrop) }} />
    <Content>
      <MoviePoster path={poster} />
      <Item>
        <Title>{title}</Title>
        <MovieRating vote={voteAvg}/>
        <Overview>
          {overview.length > 117
            ? `${overview.substring(0, 120)}...`
            : overview}
        </Overview>
        <BtnComponent>
          <BtnText>Show Detail</BtnText>
        </BtnComponent>
      </Item>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MovieSlide;
