import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import makePhotoUrl from '../makePhotoUrl';

const Image = styled.Image`
  width:110px;
  height:160px;
`;

const MoviePoster = ({path}) => <Image source={{uri:makePhotoUrl(path,"w300")}}/>;

MoviePoster.propTypes = {
  path : PropTypes.string
};

export default MoviePoster;