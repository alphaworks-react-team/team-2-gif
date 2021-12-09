import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import Modal from "../Modal/Modal";
import axios from "axios";
import { FavContext } from "../../Contexts/FavContext";

const TrendingStyles = styled.div`
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

const TrendingPage = () => {
  const [currentGif, setCurrentGif] = useState({});
  const [modalDisplay, setModalDisplay] = useState(false);
  const [trending, setTrending] = useState([]);
  const { favColor, addFavGif } = useContext(FavContext);

  useEffect(() => {
    axios
      .get("/trending")
      .then((res) => {
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const iconStyles = {
    position: "absolute",
    transform: "translateY(-45px)",
    display: "flex",
  };

  const modalCloseHelper = async () => {
    setCurrentGif({});
    setModalDisplay(false);
  };

  return (
    <div>
      <Title>Trending</Title>
      <StyledGrid>
        {trending.map((trending, index) => (
          <TrendingStyles key={index}>
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <img
                src={trending.images.fixed_width.url}
                style={{ width: "100%", borderRadius: "10px" }}
                alt=""
                onClick={() => {
                  setCurrentGif(trending);
                  setModalDisplay(true);
                }}
              />
              <AiFillHeart
                onClick={() =>
                  addFavGif(trending.images.fixed_width.url, trending.id)
                }
                color={favColor(trending.id) ? "red" : "pink"}
                size="2rem"
                style={iconStyles}
              />
            </div>
          </TrendingStyles>
        ))}
      </StyledGrid>
      {currentGif.type && (
        <Modal
          shown={modalDisplay}
          img={currentGif.images?.original.url}
          title={currentGif.title}
          close={() => modalCloseHelper()}
        ></Modal>
      )}
    </div>
  );
};

export default TrendingPage;
