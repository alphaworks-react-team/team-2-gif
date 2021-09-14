import React from "react";
import HomeCategories from "../Components/HomeCategories/HomeCategories";
import HomeTrending from "../Components/HomeTrending/HomeTrending";

const Home = ({ onSearchSubmit }) => {
  return (
    <div>
      <HomeTrending />
      <HomeCategories onSearchSubmit={onSearchSubmit} />
    </div>
  );
};

export default Home;
