import React from "react";
import { connect } from "frontity";
import Link from "./links";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <h1>Workshop</h1>
      <p>URL: {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">More Posts</Link>
        <Link href="/lorem-ipsum">Lorem Ipsum</Link>
      </nav>
      <hr />
      <main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </main>
    </>
  );
};

export default connect(Root);
