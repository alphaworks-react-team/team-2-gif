import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import FavModal from "../Modal/FavModal";

const FavStyles = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    z-index: 1;
  }
`;
const StyledGrid = styled.div`
  line-height: 1.1;
  -webkit-column-count: 4;
  -webkit-column-gap: 10px;
  -moz-column-count: 4;
  -moz-column-gap: 10px;
  column-count: 4;
  column-gap: 10px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;

  color: #ffff;
`;

const Favs = ({ favGif, removeFavGif, favColor }) => {
  const [currentGif, setCurrentGif] = useState({});
  const [modalDisplay, setModalDisplay] = useState(false);

  const modalCloseHelper = async () => {
    setCurrentGif({});
    setModalDisplay(false);
  };

  const styles = {
    minHeight: "700px",
    display: "flex",
    flexFlow: "row wrap",
    img: {
      marginRight: "10px",
    },
  };
  const iconStyles = {
    position: "absolute",
    transform: "translateY(-45px)",
    display: "flex",
  };

  return (
    <div style={{ minHeight: "700px" }}>
      <Title>Favorites</Title>
      <StyledGrid>
        {favGif.map((favs, index) => (
          <FavStyles key={index} style={styles.img}>
            <img
              src={favs.image}
              style={{ width: "100%", borderRadius: "10px" }}
              alt=""
              onClick={() => {
                setModalDisplay(true);
                setCurrentGif(favs);
              }}
            />
            <AiFillHeart
              onClick={() => removeFavGif(favs.id)}
              color={favColor(favs.id) ? "red" : "pink"}
              size="2rem"
              style={iconStyles}
            />
          </FavStyles>
        ))}
      </StyledGrid>
      <FavModal
        shown={modalDisplay}
        img={currentGif?.image}
        removeFavGif={removeFavGif}
        close={() => modalCloseHelper()}
      ></FavModal>
    </div>
  );
};

export default Favs;
