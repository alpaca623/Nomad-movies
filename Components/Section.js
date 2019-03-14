import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { WHITE } from "../Constants/Colors";

const Container = styled.View`
  margin-vertical: 20px;
`;

const HContainer = styled.View``;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const Section = ({ title, children, horizontal = true }) =>
  horizontal ? (
    <Container>
      <Title>{title}</Title>
      <ScrollView horizontal={horizontal}>{children}</ScrollView>
    </Container>
  ) : (
    <HContainer>
      <Title>{title}</Title>
      <ScrollView horizontal={horizontal}>{children}</ScrollView>
    </HContainer>
  );

Section.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;
