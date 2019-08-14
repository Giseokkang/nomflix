import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  null;

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
