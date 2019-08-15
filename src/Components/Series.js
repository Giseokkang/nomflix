import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 50px;
  width: 500px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  position: relative;
`;

const SeriesContainer = styled.div`
  width: 70%;
  background-size: cover;
  margin-bottom: 50px;
`;

const Title = styled.span`
  font-size: 30px;
  margin-bottom: 50px;
`;

const Series = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <SeriesContainer>{children}</SeriesContainer>
  </Container>
);

Series.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Series;
