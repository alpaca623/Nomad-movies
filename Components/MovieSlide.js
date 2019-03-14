import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieSlide = ({ id, title, voteAvg, overview, backdrop, poster }) => null;

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MovieSlide;
