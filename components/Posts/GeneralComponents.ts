import styled from "styled-components";

export const HeadPostImage = styled.div`
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  width: 100%;
  height: 100%;
`;
