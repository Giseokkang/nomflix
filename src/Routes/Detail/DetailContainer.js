import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "Components/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      collection: null,
      Seasons: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;

    const parsedId = Number(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    let collection = null;
    let seasons = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        ({ data: collection } = await movieApi.movieCollection(
          result.belongs_to_collection.id
        ));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: seasons } = await tvApi.showSeasons(parsedId));
      }
    } catch {
      this.setState({
        error: "couldn't find anything."
      });
    } finally {
      this.setState({
        loading: false,
        result,
        collection,
        seasons
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const {
        match: {
          params: { id }
        },
        history: { push }
      } = this.props;

      const { isMovie } = this.state;

      const parsedId = Number(id);

      if (isNaN(parsedId)) {
        return push("/");
      }

      let result = null;
      let collection = null;
      let seasons = null;
      try {
        if (isMovie) {
          ({ data: result } = await movieApi.movieDetail(parsedId));
          ({ data: collection } = await movieApi.movieCollection(
            result.belongs_to_collection.id
          ));
        } else {
          ({ data: result } = await tvApi.showDetail(parsedId));
          ({ data: seasons } = await tvApi.showSeasons(parsedId));
        }
      } catch {
        this.setState({
          error: "couldn't find anything."
        });
      } finally {
        this.setState({
          loading: false,
          result,
          collection,
          seasons
        });
      }
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      error: "couldn't find anything."
    });
  }

  // async componentDidUpdate() {
  // }

  render() {
    const { result, collection, seasons, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        collection={collection}
        seasons={seasons}
        error={error}
        loading={loading}
      />
    );
  }
}
