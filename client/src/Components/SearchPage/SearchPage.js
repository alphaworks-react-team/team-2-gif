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
      {/* <form onSubmit={onSubmit}>
        <input
          style={styles.input}
          value={searchTerm}
          onChange={onChange}
          type="text"
          placeholder="search"
          name="search"
        />
        <Button type="submit" bgColor="#007bff" size="small" color="white">
          Search
        </Button>
      </form> */}

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
