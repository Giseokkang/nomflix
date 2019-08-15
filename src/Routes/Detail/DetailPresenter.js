import React from "react";
import Helmet from "react-helmet";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

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
  width: 70%;
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
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const HomePresenter = ({ result, error, loading }) =>
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
        </Data>
      </Content>
    </Container>
  );

HomePresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
