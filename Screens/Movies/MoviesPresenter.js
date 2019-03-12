import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
const MoviesPresenter = ({ loading }) => <Text>Movies</Text>;

export default MoviesPresenter;

MoviesPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};
