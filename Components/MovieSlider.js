import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Layout from "../Constants/Layout";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.ScrollView`
  background-color: red;
  height:${SWIPER_HEIGHT}
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) => (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    <View>
      <Text>first</Text>
    </View>
    <View>
      <Text>second</Text>
    </View>
    <View>
      <Text>third</Text>
    </View>
  </Swiper>
);

MovieSlider.propTypes = {
  movies : PropTypes.array
}

export default MovieSlider;
