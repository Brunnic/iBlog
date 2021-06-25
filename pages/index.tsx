import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

import fb from "../utils/firebase";

import Navbar from "../components/Navbar";
import Post from "../components/Posts/Post/Post";
import { Post as PostType } from "../types/Post";
import { HeadPostImage } from "../components/Posts/GeneralComponents";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

interface HomePageProps {
  posts: PostType[];
  count: number;
}

const HeadPost = styled.div`
  width: 100% !important;
  height: 92.3vh !important;
  position: relative;
  text-align: center;
`;

const Container = styled.div`
  margin: 4rem 0;
`;

const PostsContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 1rem;
`;

const MainWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default function Home(props: HomePageProps) {
  const router = useRouter();
  const page = router.query.p ? parseInt(router.query.p as string) : 1;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`/?p=${value}`);
  };

  return (
    <div>
      <Head>
        <title>iBlog</title>
      </Head>

      <Navbar />

      <Container>
        <HeadPost>
          {props.posts && (
            <HeadPostImage url={props.posts[0].main_image}>
              <Post post={props.posts[0]} head={true} />
            </HeadPostImage>
          )}
        </HeadPost>

        <MainWrapper>
          <PostsContainer>
            {props.posts &&
              props.posts.map((p, i) => {
                if (i > 0) {
                  return <Post post={p} head={false} key={i} />;
                }
              })}
          </PostsContainer>
          <Sidebar />
        </MainWrapper>
        <Pagination
          count={Math.ceil(props.count / 5)}
          page={page}
          onChange={handlePageChange}
        />
      </Container>

      <Footer margin={undefined} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const db = fb.firestore();

  let page = context.query.p ? parseInt(context.query.p as string) : 1;
  console.log(page);

  const count = await (await db.collection("posts").get()).size;

  try {
    const posts = await db
      .collection("posts")
      .orderBy("n", "desc")
      .startAt(page === 1 ? count : count - (page - 1) * 5)
      .limit(5)
      .get();

    const serialized = posts.docs.map((p) => ({
      ...p.data(),
      id: p.id,
      createdAt: p.data().createdAt.toMillis(),
      content: p.data().content.replace(/(<([^>]+)>)/gi, ""),
    }));

    return {
      props: {
        posts: serialized,
        count,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
