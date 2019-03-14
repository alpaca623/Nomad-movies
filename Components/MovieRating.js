import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { WHITE, GREY_COLOR } from "../Constants/Colors";

const Rating = styled.Text`
  color: ${props => (props.inSlide ? WHITE : GREY_COLOR)};
  font-size: ${props => props.inSlide ? '10px' : '8px'};
  font-weight:600;
  
`;

const MovieRating = ({ vote, inSlide = false }) => (
  <Rating inSlide={inSlide}>⭐️ {`${vote} / 10`} </Rating>
);

MovieRating.propTypes = {
  vote: PropTypes.number
};

export default MovieRating;
