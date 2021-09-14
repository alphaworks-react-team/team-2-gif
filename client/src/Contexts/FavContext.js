import React, { createContext, useState, useEffect } from "react";

const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [favGif, setFavGif] = useState([]);

  // used for favorites in local storage
  useEffect(() => {
    const favs = localStorage.getItem("favs");
    if (favs == null) {
      setFavGif([]);
      localStorage.setItem("favs", JSON.stringify([]));
    } else {
      setFavGif(JSON.parse(favs));
    }
  }, []);

  const favColor = (id) => {
    const favsCopy = [...favGif];
    const existingIds = favsCopy.map((favs) => favs.id);
    if (!existingIds.includes(id)) {
      return false;
    }
    return true;
  };

  const removeFavGif = (id) => {
    const favsCopy = [...favGif];
    const newFavs = favsCopy.filter((favs) => favs.id !== id);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavGif(newFavs);
  };

  const addFavGif = (image, id) => {
    const favsCopy = [...favGif];
    const existingIds = favsCopy.map((favs) => favs.id);
    if (!existingIds.includes(id)) {
      favsCopy.push({ image: image, id: id });
      localStorage.setItem("favs", JSON.stringify(favsCopy));
      setFavGif(favsCopy);
    } else {
      const newFavs = favsCopy.filter((favs) => favs.id !== id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setFavGif(newFavs);
    }
  };

  return (
    <FavContext.Provider value={{ favGif, favColor, removeFavGif, addFavGif }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavContextProvider };
