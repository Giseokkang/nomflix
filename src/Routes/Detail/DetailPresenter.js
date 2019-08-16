import React from "react";
import Helmet from "react-helmet";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Series from "Components/Series";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${probs => probs.bgImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  filter: blur(3px);
  opacity: 0.4;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 500px;
  margin-left: 30px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 20px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
  margin-bottom: 50px;
`;

const TrailerContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  position: relative;
`;

const Trailer = styled.div`
  :not(:first-child) {
    margin-top: 30px;
  }
  width: 80%;
  height: 80px;
  font-size: 20px;
  padding: 15px 30px;
  background-color: #2c3e50;
  color: white;
  border-radius: 10px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;

const TrailerTitle = styled.span`
  width: 100px;
  font-size: 20px;
`;

const HomePresenter = ({ result, collection, seasons, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title> {result.title ? result.title : result.name} | nomflix</title>
      </Helmet>
      <Backdrop
        bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImg={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} 분
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.videos.results.length > 0 ? (
            <>
              <TrailerTitle>관련 영상</TrailerTitle>
              <TrailerContainer>
                {result.videos.results.map(result => (
                  <Trailer>
                    <a
                      href={`https://www.youtube.com/watch?v=${result.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{result.name}</span>
                    </a>
                  </Trailer>
                ))}
              </TrailerContainer>
            </>
          ) : null}
        </Data>
        {collection && collection.parts.length > 0 && (
          <Series title={collection.name}>
            {collection.parts.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Series>
        )}
        {seasons && seasons.episodes.length > 0 && (
          <Series title="에피소드">
            {seasons.episodes.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.still_path}
                title={movie.name}
                year={movie.air_date && movie.air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Series>
        )}
      </Content>
    </Container>
  );

HomePresenter.propTypes = {
  result: propTypes.object,
  collection: propTypes.object,
  seasons: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
