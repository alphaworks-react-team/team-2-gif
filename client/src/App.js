import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import HomeCategories from "./Components/HomeCategories/HomeCategories";
import Main from "./Components/Main";
import "./App.css";
import HomeTrending from "./Components/HomeTrending/HomeTrending";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Modal from "./Components/Modal/Modal";
import Paginator from "./Components/Paginator/Paginator";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  const [trending, setTrending] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedGifs, setSearchedGifs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [offset, setOffset] = useState(0);
  const [modal, setModal] = useState();

  useEffect(() => {
    axios.get("/api").then((res) => {
      console.log(res);
      setTrending(res.data);
    });
    axios
      .get("/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // this use effect for pagination
  useEffect(() => {
    if (offset >= 0) {
      axios
        .get(`/search/${searchTerm}/${offset}`)
        .then((res) => {
          console.log(res);
          setSearchedGifs(res.data);
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

  const onSearchSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
    axios
      .get(`/search/${searchTerm}/0`)
      .then((res) => {
        console.log(res);
        setSearchedGifs(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Router>
      <Main>
        <Search onSearchSubmit={onSearchSubmit} offset={offset} />
        <Switch>
          <Route exact path="/">
            <HomeTrending trending={trending} />
            <HomeCategories
              categories={categories}
              clickedSearch={onSearchSubmit}
            />
          </Route>
          <Route exact path="/search/:searchTerm/:offset"  >
              <h1 style={{ color: "white", margin: "0px 0px 20px 35px" }}>
                {searchTerm}
              </h1>
              <SearchPage searchedGifs={searchedGifs} />
              <Paginator
                offset={offset}
                incrementOffset={incrementOffset}
                decrementOffset={decrementOffset}
              />
          </Route>
        </Switch>
        </Main>
      </Router>

        {/* <TrendingPage trending={trending} />
        {searchedGifs.length > 1 ? (
          <div>
          </div>
        ) : (
          <div>
          </div>
        )}
        <Modal onClick={() => console.log("hello world")}></Modal> */}
    </div>
  );
};

export default App;
