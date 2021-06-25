import Link from "next/link";
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const StyledLink = styled(Link)`
  font-size: 20px;

  :hover {
    border: 2px solid #42cbf5;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  margin-left: 1.5rem;
  gap: 1rem;

  a {
    font-size: 20px;
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #42cbf5;
    }
  }
`;

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          iBlog
        </Typography>

        <LinksContainer>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/contact">Contact</StyledLink>
        </LinksContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
