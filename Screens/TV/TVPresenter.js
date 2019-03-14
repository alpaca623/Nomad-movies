import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const TVPresenter = ({ loading, popular, topRated, airingToday }) => (
  <Text>TV Shows</Text>
);

TVPresenter.prototype = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
