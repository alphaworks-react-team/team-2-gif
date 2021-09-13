import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../HomeSearch/styles";
import { Link } from "react-router-dom";
import axios from "axios";
//height:30vh
//width:100%
const HomeTrending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("/trending")
      .then((res) => {
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ref = useRef(null);
  const styles = {
    height: "30vh",
    width: "100%",
    gifs: {
      display: "flex",
      overflowX: "scroll",
      overflowY: "hidden",
    },
    img: {
      marginRight: "10px",
    },
    trend: {
      display: "flex",
      alignItems: "center",
    },
  };
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div styles={styles}>
      <Link to="/trending">
        <h1 style={{ color: "white", margin: 0 }}>Trending</h1>
      </Link>
      <div style={styles.trend}>
        <Button
          bgColor="#121212"
          color="#ffff"
          size="xx-large"
          onClick={() => scroll(-1000)}
        >
          &lt;
        </Button>
        <Scroll style={styles.gifs} ref={ref}>
          {trending.map((gif, index) => (
            <img
              key={index}
              src={gif.images.fixed_height.url}
              alt=""
              style={styles.img}
            />
          ))}
        </Scroll>
        <Button
          bgColor="#121212"
          color="#ffff"
          size="xx-large"
          onClick={() => scroll(1000)}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

const Scroll = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export default HomeTrending;
