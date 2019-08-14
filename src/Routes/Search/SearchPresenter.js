import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  error,
  loading
}) => null;

SearchPresenter.propTypes = {
  movieResult: propTypes.array,
  SearchResult: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired
};

export default SearchPresenter;
