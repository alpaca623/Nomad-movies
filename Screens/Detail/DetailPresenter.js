import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../Constants/Colors";
import Layout from "../../Constants/Layout";
import makePhotoUrl from "../../makePhotoUrl";
import MoviePoster from "../../Components/MoviePoster";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-horizontal: 30px;
  align-items: center;
`;

const Title = styled.Text`
  font-weight:600;
  font-size:16px;
  color: white;
`;

const DetailPresenter = ({
  id,
  isMovie,
  voteAvg,
  posterPhoto,
  backdropPhoto,
  title,
  overview
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backdropPhoto) }} />
    <MoviePoster path={posterPhoto} />
    <Content>
      <Title>{title}</Title>
    </Content>
  </Container>
);

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.string,
  voteAvg: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string
};

export default DetailPresenter;
