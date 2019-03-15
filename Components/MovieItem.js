import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";

import { WHITE, GREY_COLOR } from "../Constants/Colors";
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

const HContainer = styled.View`
  flex-direction: row;
  margin-vertical: 10px;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-top: 10px;
`;

const MovieItem = ({
  id,
  voteAvg,
  title,
  overview,
  posterPhoto,
  backdropPhoto,
  horizontal = true,
  navigation,
  isMovie = true
}) => (
  <TouchableWithoutFeedback
    onPress={() =>
      navigation.navigate("Detail", {
        id: id,
        isMovie: isMovie,
        voteAvg,
        title,
        overview,
        posterPhoto,
        backdropPhoto
      })
    }
  >
    {horizontal ? (
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 15 ? `${title.substring(0, 14)}...` : title}
        </Title>
        <MovieRating vote={voteAvg} />
      </Container>
    ) : (
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title>{title}</Title>
          <MovieRating vote={voteAvg} />
          {overview ? (
            <Overview>
              {overview.length > 150
                ? `${overview.substring(0, 147)}...`
                : overview}
            </Overview>
          ) : (
            ""
          )}
        </Column>
      </HContainer>
    )}
  </TouchableWithoutFeedback>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  voteAvg: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  overview: PropTypes.string,
  isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);
