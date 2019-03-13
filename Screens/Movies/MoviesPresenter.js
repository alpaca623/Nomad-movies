import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const MoviesPresenter = ({ loading }) => 
  loading ? <Loader /> : <Text>Movies</Text>


export default MoviesPresenter;

MoviesPresenter.prototype = {
  loading: PropTypes.bool.isRequired
};
