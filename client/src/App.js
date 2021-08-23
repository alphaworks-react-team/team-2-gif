
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res)
        setTrending(res.data);
        setTimeout(() => {
          setLoading((prevState) => !prevState);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
