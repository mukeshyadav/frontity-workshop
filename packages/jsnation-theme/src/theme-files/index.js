import React from "react";
import { connect } from "frontity";
import Link from "./links";

const Root = ({ state }) => {
  return (
    <>
      <h1>Workshop</h1>
      <p>URL: {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">More Posts</Link>
        <Link href="/lorem-ipsum">Lorem Ipsum</Link>
      </nav>
    </>
  );
};

export default connect(Root);
