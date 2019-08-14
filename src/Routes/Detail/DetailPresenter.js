import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ result, error, loading }) => null;

HomePresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
