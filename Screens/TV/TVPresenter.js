import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const TVPresenter = ({ loading }) => <Text>TV Shows</Text>;

export default TVPresenter;

TVPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};