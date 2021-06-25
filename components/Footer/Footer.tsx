import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  color: white;
  background-color: #3f51b5;
  margin-top: ${(props: { margin: number | undefined }) => `${props.margin}px`};
`;

const Footer = (props: { margin: number | undefined }) => {
  return (
    <Container margin={props.margin}>
      <p>@ Brunnic - All Rights Reserved</p>
    </Container>
  );
};

export default Footer;
