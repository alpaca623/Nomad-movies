import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const DetailPresenter = ({ loading }) => <Text>Detail</Text>;

DetailPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};
