import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";

const StyledCategory = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
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

const StyledHeader = styled.h2`
  padding-left: 15px;
  position: absolute;
  background-image: linear-gradient(
    90deg,
    rgba(11, 191, 255, 1) 0%,
    rgba(126, 79, 255, 1) 50%,
    rgba(198, 61, 212, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const HomeCategories = ({ onSearchSubmit }) => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchCategory = (index) => {
    onSearchSubmit(categories[index].name);
    history.push(`/search`);
  };

  return (
    <div style={{ marginTop: "35px" }}>
      <h1 style={{ color: "white", margin: "10px" }}>Categories</h1>
      <StyledGrid>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{ overflow: "hidden", width: "100%", marginBottom: "10px" }}
          >
            <StyledCategory onClick={() => searchCategory(index)}>
              <StyledHeader>{category.name.toUpperCase()}</StyledHeader>
              <StyledImg src={category.gif.images.fixed_width.url} alt="" />
            </StyledCategory>
          </div>
        ))}
      </StyledGrid>
    </div>
  );
};

export default HomeCategories;
