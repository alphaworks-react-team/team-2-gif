import React, { useState } from "react";
import { Button } from "./styles";
import { useHistory } from "react-router";
//height:100%;
//width:10vh
const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSearchSubmit(searchTerm);
    setSearchTerm("");
  };
  const styles = {
    height: "10vh",
    width: "100%",
    marginTop: "10px",
    form: {
      display: "flex",
      justifyContent: "center",
    },
    input: {
      padding: "10px",
      backgroundColor: "white",
      border: "none",
      outline: "none",
      width: "70%",
      alignSelf: "center",
    },
    button: {
      marginLeft: "10px",
      bgColor: "#6E65FF",
    },
  };

  const searchCheck = () => {
    if (!searchTerm) {
      alert("please type a search term");
    } else {
      history.push("/search");
    }
  };

  return (
    <div style={styles}>
      <form onSubmit={onSubmit} style={styles.form}>
        <input
          style={styles.input}
          value={searchTerm}
          onChange={onChange}
          type="text"
          placeholder="search"
          name="search"
        />
        <Button
          type="submit"
          onClick={() => searchCheck()}
          bgColor="#6E65FF"
          size="small"
          color="white"
          style={styles.button}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
