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
  const [page, setPage] = useState(1)
  const [modalDisplay, setModalDisplay] = useState(false);
	const [currentGif, setCurrentGif] = useState({});

	useEffect(() => {
		axios.get('/api').then(res => {
			console.log(res);
			setTrending(res.data);
		});
		axios
			.get('/categories')
			.then(res => {
				console.log(res);
				setCategories(res.data);
			})
			.catch(err => console.log(err));
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
    setOffset(0)
    setPage(1)
    axios
      .get(`/search/${searchTerm}/${offset}`)
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
        <Search onSearchSubmit={onSearchSubmit} offset={offset} page={page} />
        	{/* <TrendingPage
					setModalDisplay={setModalDisplay}
					setCurrentGif={setCurrentGif}
					trending={trending}
				/> */}
        <Switch>
          <Route exact path="/">
            <HomeTrending trending={trending} />
            <HomeCategories
              categories={categories}
              clickedSearch={onSearchSubmit}
            />
          </Route>
          <Route exact path="/trending">
              <TrendingPage
                setModalDisplay={setModalDisplay}
                setCurrentGif={setCurrentGif}
                trending={trending}
              />
              <Modal shown={modalDisplay}>
                  <img src={currentGif.images?.original.url} alt='' srcSet='' />
                  <button onClick={() => setModalDisplay(false)}>Close</button>
                  <button>Copy Link</button>
              </Modal>
          </Route>
          <Route path="/search/:searchTerm/:page" >
              <h1 style={{ color: "white", margin: "0px 0px 20px 35px" }}>
                {searchTerm}
              </h1>
              <SearchPage searchedGifs={searchedGifs}
                setModalDisplay={setModalDisplay}
                setCurrentGif={setCurrentGif}
                searchedGifs={searchedGifs}
              />
              <Paginator
                offset={offset}
                page={page}
                setPage={setPage}
                incrementOffset={incrementOffset}
                decrementOffset={decrementOffset}
              />
              <Modal shown={modalDisplay}>
                  <img src={currentGif.images?.original.url} alt='' srcSet='' />
                  <button onClick={() => setModalDisplay(false)}>Close</button>
                  <button>Copy Link</button>
              </Modal>
          </Route>
        </Switch>
        </Main>
      </Router>
    </div>
  );
};

export default App;
