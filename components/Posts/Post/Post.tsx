import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import Moment from "react-moment";

import { Post as PostType } from "../../../types/Post";

const HeadContainer = styled.div`
  display: flex;
  color: white;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;

  a {
    font-size: 22px !important;
    color: #2b96dd !important;
    text-transform: capitalize !important;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PostContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 18px !important;
    color: #42adf5 !important;
    text-transform: capitalize !important;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Post: React.FC<{ post: PostType; head: boolean }> = ({
  post,
  head,
}: {
  post: PostType;
  head: boolean;
}) => {
  if (head) {
    return (
      <HeadContainer>
        <div style={{ flex: 1, textAlign: "start", fontSize: "28px" }}>
          <h2>{post.title}</h2>
          <span>
            <Moment format="MMMM DD, YYYY" date={new Date(post.createdAt)} />
          </span>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "start",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <p>{post.content.substr(0, 320) + " ..."}</p>
          <Link href={"/" + post.slug}>Read More &gt;&gt; </Link>
        </div>
      </HeadContainer>
    );
  } else {
    return (
      <Container style={{ marginTop: "2rem", flex: 4 }}>
        <Image
          src={post.main_image}
          alt={post.title}
          width={800}
          height={400}
          layout="intrinsic"
          loading="eager"
        />
        <PostContainer>
          <div>
            <h2>{post.title}</h2>
            <h4>
              <Moment format="MMMM DD, YYYY" date={new Date(post.createdAt)} />
            </h4>
          </div>
          <div
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          >
            <p>{post.content.substr(0, 255) + " ..."}</p>
            <Link href={"/" + post.slug}>Read More &gt;&gt; </Link>
          </div>
        </PostContainer>
      </Container>
    );
  }
};

export default Post;
