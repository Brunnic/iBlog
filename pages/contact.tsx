import Head from "next/head";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Main = styled.div`
  margin-top: 4rem !important;
`;

const Container = styled.div`
  width: 66%;
  margin: 6rem auto;
  color: black;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  min-height: 36rem;

  h1 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #3f51b5;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const StyledMailAnchor = styled.a`
  color: #3f51b5;
`;

const Socials = styled.div`
  padding: 1rem;
  display: flex;
  margin: 0 auto;
  gap: 0.5rem;

  svg {
    font-size: 64px;
  }
`;

const ContactPage = () => {
  return (
    <Main>
      <Head>
        <title>Contact Us</title>
      </Head>

      <Navbar />

      <Container>
        <h1>Contact Us</h1>
        <p>
          You can contact us at{" "}
          <StyledMailAnchor href="mailto:test@gmail.cm">
            test@gmail.com
          </StyledMailAnchor>{" "}
          <br />
          And you ca also check our social media
        </p>
        <Socials>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </Socials>
      </Container>

      <Footer margin={undefined} />
    </Main>
  );
};

export default ContactPage;
