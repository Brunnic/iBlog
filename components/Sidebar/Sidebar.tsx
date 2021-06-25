import React from "react";
import styled from "styled-components";
import { TextField, InputAdornment } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  margin: 3rem 0;
`;

const SearchBox = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
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

const Sidebar = () => {
  const [search, setSearch] = React.useState("");

  return (
    <Container>
      <SearchBox>
        <TextField
          style={{ width: "75%" }}
          id="search-input"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchBox>

      <h1 style={{ textAlign: "center" }}>Visit our socials</h1>
      <Socials>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </Socials>
    </Container>
  );
};

export default Sidebar;
