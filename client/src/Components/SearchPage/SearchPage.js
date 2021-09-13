import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paginator from "../Paginator/Paginator";
import Modal from "../Modal/Modal";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";

const StyledSearch = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  :hover {
    cursor: pointer;
  }
`;
const StyledGrid = styled.div`
  line-height: 2;
  -webkit-column-count: 4;
  -webkit-column-gap: 10px;
  -moz-column-count: 4;
  -moz-column-gap: 10px;
  column-count: 4;
  column-gap: 10px;
`;

const iconStyles = {
  position: "absolute",
  transform: "translateY(-45px)",
  display: "flex",
};

const SearchPage = ({ searchTerm, addFavGif, favColor }) => {
  const [searchedContent, setSearchedContent] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [currentGif, setCurrentGif] = useState({});
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    if (offset >= 0 && searchTerm !== "") {
      axios
        .get(`/search/${searchTerm}/${offset}`)
        .then((res) => {
          setSearchedContent(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [offset, searchTerm]);

  const incrementOffset = () => {
    setOffset((offset) => offset + 50);
  };
  const decrementOffset = () => {
    setOffset((offset) => offset - 50);
  };

  const modalCloseHelper = async () => {
    setCurrentGif({});
    setModalDisplay(false);
  };

  return (
    <div>
      <h1 style={{ color: "white", margin: "0px 0px 20px 35px" }}>
        {searchTerm}
      </h1>
      <StyledGrid>
        {searchedContent &&
          searchedContent.map((searchRes, index) => (
            <StyledSearch key={index}>
              <img
                src={searchRes.images.fixed_width.url}
                style={{ width: "100%", borderRadius: "10px" }}
                alt=""
                onClick={() => {
                  setCurrentGif(searchedContent[index]);
                  setModalDisplay(true);
                }}
              />
              <AiFillHeart
                onClick={() =>
                  addFavGif(searchRes.images.fixed_width.url, searchRes.id)
                }
                color={favColor(searchRes.id) ? "red" : "pink"}
                size="2rem"
                style={iconStyles}
              />
            </StyledSearch>
          ))}
      </StyledGrid>
      <Paginator
        offset={offset}
        page={page}
        setPage={setPage}
        incrementOffset={incrementOffset}
        decrementOffset={decrementOffset}
      ></Paginator>
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

export default SearchPage;
