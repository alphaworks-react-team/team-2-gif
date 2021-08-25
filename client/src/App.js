<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import Main from "./Components/Main";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
=======

import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import HomeCategories from './Components/HomeCategories/HomeCategories'
import Main from './Components/Main'
>>>>>>> dev

const App = () => {
  const [trending, setTrending] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
  const [searchedGifs, setSearchedGifs] = useState([]);
=======
  const [searchedGifs, setSearchedGifs] = useState([])
  const [categories, setCategories] = useState([])
>>>>>>> dev

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
<<<<<<< HEAD
        console.log(res);
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSearchSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
    axios
      .get(`/search/${searchTerm}`)
      .then((res) => {
        console.log(res);
        setSearchedGifs(res.data);
      })
      .catch((err) => console.log(err));
  };
=======
        console.log(res)
        setTrending(res.data);
      })
      axios.get("/categories")
      .then((res) => {
        console.log(res)
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const onSearchSubmit = (searchTerm) => {
    setSearchTerm(searchTerm)
    axios.get(`/search/${searchTerm}`)
        .then((res) => {
            console.log(res)
            setSearchedGifs(res.data);
        })
        .catch((err) => console.log(err));
} 

>>>>>>> dev

  return (
    <div className="App">
      <Main>
        <Search onSearchSubmit={onSearchSubmit} />
<<<<<<< HEAD
        <SearchPage>
          hello
          {searchedGifs &&
            searchedGifs.map((gif, index) => (
              <div key={index}>
                <img src={gif.images.fixed_height.url} alt="" />
              </div>
            ))}
        </SearchPage>
      </Main>
    </div>
  );
};
=======
        <HomeCategories categories={categories} />
      </Main>

    </div>
  );
}
>>>>>>> dev

export default App;
