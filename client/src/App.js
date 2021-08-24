
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search";

const App = () => {
  const [trending, setTrending] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedGifs, setSearchedGifs] = useState([])

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res)
        setTrending(res.data);
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
      <Search onSearchSubmit={onSearchSubmit} />

    </div>
  );
}

export default App;
