import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "Components/api";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  async searchByTerm(term) {
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResult }
      } = await movieApi.search(term);
      const {
        data: { results: tvResult }
      } = await tvApi.search(term);
      this.setState({
        movieResult,
        tvResult
      });
    } catch {
      this.setState({
        error: "Couldn't find results"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { movieResult, tvResult, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
