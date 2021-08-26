import React from "react";
import styled from "styled-components";

//height:80vh
//width:100%

const StyledSearch = styled.div`
  position: relative;
  width: 100%;
  height: auto;
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

const SearchPage = ({ searchedGifs }) => {
  return (
    <div>
      {searchedGifs.length > 0 ? (
        <h1 style={{ color: "white" }}>Search result</h1>
      ) : null}
      <StyledGrid>
        {searchedGifs.map((searchRes, index) => (
          <StyledSearch key={index}>
            <img
              src={searchRes.images.fixed_width.url}
              style={{ width: "100%" }}
              alt=""
            />
          </StyledSearch>
        ))}
      </StyledGrid>
    </div>
  );
};

export default SearchPage;
