
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [trending, setTrending] = useState([])


  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res)
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
