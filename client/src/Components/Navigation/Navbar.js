import React from "react";
import styled from "styled-components";
import giphy from "../Image/giphy209px.png";
import { Link } from "react-router-dom";
const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: #121212;
  display: flex;
  padding: 15px;
  justify-content: center;
`;

const Logo = styled.div`
  background-image: url(${giphy});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  border-color: #121212;
`;
const NavMenu = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: ; */
  padding-left: 10px;
  height: 100%;
  width: 100%;
`;

const StyledHeader = styled.h2`
  display: flex;
  padding: 10px 10px 0px 10px;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
  color: white;
  @keyframes backgroundIMG {
    0% {
      background-image: none;
    }
    25% {
      background-image: linear-gradient(
        90deg,
        rgba(11, 191, 255, 0.2) 0%,
        rgba(126, 79, 255, 0.2) 50%,
        rgba(198, 61, 212, 0.2) 100%
      );
    }
    50% {
      background-image: linear-gradient(
        90deg,
        rgba(11, 191, 255, 0.4) 0%,
        rgba(126, 79, 255, 0.4) 50%,
        rgba(198, 61, 212, 0.4) 100%
      );
    }
    75% {
      background-image: linear-gradient(
        90deg,
        rgba(11, 191, 255, 0.6) 0%,
        rgba(126, 79, 255, 0.6) 50%,
        rgba(198, 61, 212, 0.6) 100%
      );
    }
    100% {
      background-image: linear-gradient(
        90deg,
        rgba(11, 191, 255, 0.8) 0%,
        rgba(126, 79, 255, 0.8) 50%,
        rgba(198, 61, 212, 0.8) 100%
      );
    }
  }
  :hover {
    animation-name: backgroundIMG;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
`;
const LittleDiv = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgba(11, 191, 255, 0.8) 0%,
    rgba(126, 79, 255, 0.8) 50%,
    rgba(198, 61, 212, 0.8) 100%
  );
  margin-bottom: 10px;
`;

const ColorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0px;
  margin-left: 7px;
  :hover {
    cursor: pointer;
  }
`;

const Navbar = ({ getRandom, setRandModalDisplay }) => {
  const handleRandom = () => {
    getRandom();
    setTimeout(() => {
      setRandModalDisplay(true);
    }, 300);
  };

  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavMenu>
        <ColorDiv>
          <Link
            to="/trending"
            style={{
              textDecoration: "none",
              paddingBottom: "0px",
              marginBottom: "0px",
            }}
          >
            <StyledHeader>Trending</StyledHeader>
          </Link>
          <LittleDiv></LittleDiv>
        </ColorDiv>
        <ColorDiv>
          <Link
            to="/favs"
            style={{
              textDecoration: "none",
              paddingBottom: "0px",
              marginBottom: "0px",
            }}
          >
            <StyledHeader>Favorite Gifs</StyledHeader>
          </Link>
          <LittleDiv></LittleDiv>
        </ColorDiv>
        <ColorDiv>
          <StyledHeader
            type="button"
            bgColor="#7e4fff"
            size="x-large"
            color="white"
            onClick={() => {
              handleRandom();
            }}
          >
            Random Gif
          </StyledHeader>
          <LittleDiv></LittleDiv>
        </ColorDiv>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
