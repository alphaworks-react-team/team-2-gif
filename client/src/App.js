
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import HomeCategories from './Components/HomeCategories/HomeCategories'
import Main from './Components/Main'
import './App.css'

const App = () => {
  const [trending, setTrending] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedGifs, setSearchedGifs] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
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


  return (
    <div className="App">
      <Main>
        <Search onSearchSubmit={onSearchSubmit} />
        <HomeCategories categories={categories} />
      </Main>
    </div>
  );
}

export default App;
