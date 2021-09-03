import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

//height:80vh
//width:100%

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
const SearchPage = ({
  searchedContent,
  setModalDisplay,
  setCurrentGif,
  addFavGif,
  favColor,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default SearchPage;
