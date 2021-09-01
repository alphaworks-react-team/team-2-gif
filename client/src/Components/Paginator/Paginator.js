import React, { useState } from "react";
import { Button } from "../HomeSearch/styles";

const Paginator = ({
  offset,
  page,
  setPage,
  incrementOffset,
  decrementOffset,
}) => {
  const incrementPageNum = () => {
    incrementOffset();
    setPage((page) => page + 1);
  };

  const decrementPageNum = () => {
    if (page > 1 && offset > 0) {
      decrementOffset();
      setPage((page) => page - 1);
    }
  };

  const styles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={styles}>
        <h2 style={{ color: "white" }}>Page {page}</h2>
      </div>
      <div style={styles}>
        {page > 1 ? (
          <div style={styles}>
            <Button
              style={{ width: "50px" }}
              bgColor="#007bff"
              size="30px"
              color="white"
              onClick={decrementPageNum}
            >
              &lt;
            </Button>
            <p>---------</p>
            <Button
              style={{ width: "50px" }}
              bgColor="#007bff"
              size="30px"
              color="white"
              onClick={incrementPageNum}
            >
              &gt;
            </Button>
          </div>
        ) : (
          <Button
            style={{ width: "50px" }}
            bgColor="#007bff"
            size="30px"
            color="white"
            onClick={incrementPageNum}
          >
            &gt;
          </Button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
