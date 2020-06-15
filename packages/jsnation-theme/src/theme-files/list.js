import React from "react";
import { connect, styled } from "frontity";
import Link from "./links";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      {data.items.map(item => {
        const post = state.source.post[item.id];
        return (
          <Items>
            <Link key={item.id} href={post.link}>
              {post.title.rendered}
            </Link>
          </Items>
        );
      })}
    </>
  );
};

export default connect(List);

const Items = styled.div`
  & > div {
    margin: 12px 0;
    font-size: 14px;
  }
`;
