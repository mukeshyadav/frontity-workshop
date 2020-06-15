import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./links";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: sans-serif;
          }
        `}
      />
      <Header>
        <HeaderContent>
          <h1>Workshop</h1>
          <p>URL: {state.router.link}</p>
          <Menu>
            <Link href="/">Home</Link>
            <Link href="/page/2">More Posts</Link>
            <Link href="/lorem-ipsum">Lorem Ipsum</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-styled: solid;
  border-color: maroon;
  border-radius: 5px;
`;

const HeaderContent = styled.div`
  max-width: 1000px;
  padding: 2em;
  margin: auto;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > div {
    margin-right: 1em;
  }
`;

const Main = styled.main`
  max-width: 1000px;
  margin: auto;
  padding: 2em;

  img {
    max-width: 100%;
  }

  h2 {
    font-size: 22px;
  }

  p {
    line-height: 1.25rem;
    margin-bottom: 0.75em;
  }
`;
