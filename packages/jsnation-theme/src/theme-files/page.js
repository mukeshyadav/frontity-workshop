import React from "react";
import { connect } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  return (
    <>
      <h2>{post.title.rendered}</h2>
      <p>
        <strong>Posted:</strong>
        {post.date}
      </p>
      <p>
        <strong>Author:</strong>
        {author.name}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
};

export default connect(Page);
