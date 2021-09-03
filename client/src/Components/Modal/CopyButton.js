import React, { useState } from "react";
import { MdCheckBox, MdContentCopy } from "react-icons/md";
import styled from "styled-components";

const CopyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  :hover {
    cursor: pointer;
  }
`;

const CopyButton = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    props.onClick();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 7000);
  };

  return (
    <div>
      {copied ? (
        <CopyDiv>
          <MdCheckBox style={{ color: "green", fontSize: "30px" }} />
          <h3 style={{ color: "white" }}>Copied</h3>
        </CopyDiv>
      ) : (
        <CopyDiv onClick={handleCopy}>
          <MdContentCopy
            onClick={handleCopy}
            style={{ color: "violet", fontSize: "30px" }}
          />
          <h3 style={{ color: "white" }}>Copy Gif</h3>
        </CopyDiv>
      )}
    </div>
  );
};

export default CopyButton;
