import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
// Components
import Home from "./Pages/Home";
import Navbar from "./Components/Navigation/Navbar";
import Search from "./Components/HomeSearch/Search";
import Main from "./Components/Main";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import RandomModal from "./Components/Modal/RandomModal";
import Favs from "./Components/Favs/Favs";
import Footer from "./Components/Footer/Footer";
// Context
import { FavContextProvider } from "./Contexts/FavContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedContent, setSearchedContent] = useState([]);
  const [randModalDisplay, setRandModalDisplay] = useState(false);
  const [randomGif, setRandomGif] = useState("");

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
          <FavContextProvider>
            <Switch>
              <Route exact path="/">
                <Home onSearchSubmit={onSearchSubmit} />
              </Route>
              <Route path="/trending" component={TrendingPage}></Route>
              <Route path="/favs" component={Favs}></Route>
              <Route path="/search">
                <SearchPage searchTerm={searchTerm} />
              </Route>
            </Switch>
          </FavContextProvider>
          <Footer />
        </Main>
      </Router>
    </div>
  );
};

export default App;
