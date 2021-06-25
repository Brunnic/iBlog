import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Error from "next/error";
import styled from "styled-components";

import { Post } from "../types/Post";
import fb from "../utils/firebase";

import Navbar from "../components/Navbar";
import { HeadPostImage } from "../components/Posts/GeneralComponents";
import PostDetails from "../components/Posts/PostDetails/PostDetails";
import Footer from "../components/Footer/Footer";

interface PostDetailsProps {
  post?: Post;
}

const Container = styled.div`
  margin-top: 4rem;
`;

const Header = styled.div`
  width: 100% !important;
  height: 92.3vh !important;
`;

const PostContainer = styled.div`
  background-color: white;
  width: 66%;
  padding: 1.5rem;
  margin: 0 auto;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
  }
`;

const PostDetailsPage = (props: PostDetailsProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [theMargin, setTheMargin] = React.useState<number | undefined>(0);

  React.useEffect(() => {
    if (ref !== null) {
      setTheMargin(ref.current?.clientHeight);
    }
  }, [ref]);

  const { post } = props;
  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Navbar />

      <Container>
        <Header>
          <HeadPostImage url={post.main_image}></HeadPostImage>
        </Header>

        <PostContainer ref={ref}>
          <PostDetails post={post} />
        </PostContainer>
      </Container>

      {theMargin != 0 && <Footer margin={theMargin} />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const db = fb.firestore();

  const post = await db
    .collection("posts")
    .where("slug", "==", context.query.post)
    .get();

  let serialized = null;

  if (!post.empty) {
    serialized = {
      ...post?.docs[0]?.data(),
      id: post?.docs[0]?.id,
      createdAt: post?.docs[0]?.data()?.createdAt.toMillis(),
    };
  }

  return {
    props: {
      post: serialized,
    },
  };
};

export default PostDetailsPage;
