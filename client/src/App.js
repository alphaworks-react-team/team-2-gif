import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import HomeCategories from "./Components/HomeCategories/HomeCategories";
import Main from "./Components/Main";
import HomeTrending from "./Components/HomeTrending/HomeTrending";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import RandomModal from "./Components/Modal/RandomModal";
import Favs from "./Components/Favs/Favs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/Navbar";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedContent, setSearchedContent] = useState([]);
  const [randModalDisplay, setRandModalDisplay] = useState(false);
  const [favGif, setFavGif] = useState([]);
  const [randomGif, setRandomGif] = useState("");

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

  const onSearchSubmit = (searchTerm) => {
    if (searchTerm !== "") {
      setSearchTerm(searchTerm);
      axios
        .get(`/search/${searchTerm}/${0}`)
        .then((res) => {
          setSearchedContent(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const getRandom = () => {
    axios.get("/random").then((res) => {
      setRandomGif(res.data.images.original.url);
    });
  };

  const randomCloseHelper = () => {
    setRandomGif("");
    setRandModalDisplay(false);
  };

  return (
    <div className="App">
      <Router>
        <Main>
          <Navbar
            setRandModalDisplay={setRandModalDisplay}
            getRandom={getRandom}
          />
          <Search onSearchSubmit={onSearchSubmit} />
          <RandomModal
            randomCloseHelper={randomCloseHelper}
            randomGif={randomGif}
            randModalDisplay={randModalDisplay}
          ></RandomModal>
          <Switch>
            <Route exact path="/">
              <HomeTrending />
              <HomeCategories onSearchSubmit={onSearchSubmit} />
            </Route>
            <Route path="/trending">
              <TrendingPage addFavGif={addFavGif} favColor={favColor} />
            </Route>
            <Route path="/favs">
              <Favs
                favGif={favGif}
                removeFavGif={removeFavGif}
                favColor={favColor}
              />
            </Route>
            <Route path="/search">
              <SearchPage
                addFavGif={addFavGif}
                favColor={favColor}
                searchTerm={searchTerm}
              />
            </Route>
          </Switch>
          <Footer />
        </Main>
      </Router>
    </div>
  );
};

export default App;
