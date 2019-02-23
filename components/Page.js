import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Meta from "../components/Meta";

const theme = {
  rose: "#FF8A7C",
  black: "#0cOD2C",
  grey: "#8F909E",
  blue: "#6981EC",
  green: "#5CBA47",
  yellow: "#FCC117",
  lightyellow: "#FCCE00",
  lightgrey: "#E1E1E1",
  backgroundgrey: "#FAFAFA",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 2px 6px 1px rgba(197, 205, 211, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.backgroundgrey};
  color: ${props => props.theme.black};
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    min-height: 100vh;
    font-size: 1.5rem;
    line-height: 2;
    font-family: source-sans-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    background: ${props => props.theme.backgroundgrey};
    @media screen and (max-width: 400px) {
      width: 100vw;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <div>{this.props.children}</div>
          <Nav />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
