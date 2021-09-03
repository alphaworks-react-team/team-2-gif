import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80vw;
  background-color: #121212;
`;

const Main = (props) => {
  return (
    <div>
      <MainContainer>{props.children}</MainContainer>
    </div>
  );
};

export default Main;
