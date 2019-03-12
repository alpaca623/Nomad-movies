import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const SearchPresenter = ({ loading }) => <Text>search</Text>;

export default SearchPresenter;

SearchPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};
