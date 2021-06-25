import styled from "styled-components";
import Moment from "react-moment";

import { Post } from "../../../types/Post";

interface PostDetailsProps {
  post: Post;
}

const Title = styled.h1`
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid black;
`;

const Author = styled.div`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  span {
    color: cyan;
  }
`;

const Content = styled.article`
  font-size: 18px;
`;

const PostDetails = (props: PostDetailsProps) => {
  const { post } = props;
  return (
    <div>
      <Title>{post.title}</Title>

      <Author>
        <div>
          by <span>{post.author}</span>
        </div>

        <div>
          <Moment format="MMMM DD, YYYY" date={new Date(post.createdAt)} />
        </div>
      </Author>

      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content>
    </div>
  );
};

export default PostDetails;
