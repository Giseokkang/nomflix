import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default () => (
  <>
    <Helmet>
      <title>Loading | nomflix</title>
    </Helmet>
    <Container>
      <span>Loading...</span>
    </Container>
  </>
);
