import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { WHITE } from "../Constants/Colors";

const Container = styled.View`
  margin-vertical : 20px;
`;

const ScrollView = styled.ScrollView`
  padding-left:20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight:600;
  padding-left:20px;
  margin-bottom:15px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={true}>
      {children}
    </ScrollView>
  </Container>
);

Section.propTypes = {
  children: PropTypes.array.isRequired,
  title : PropTypes.string.isRequired
};

export default Section;
