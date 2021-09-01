import styled from "styled-components";

const Box = styled.div`
  background: black;
  position: relative;
  width: 100%;
  height: auto;
  color: white;
  margin-top: 10px;
`;
const Row = styled.div`
  display: flex;
  margin: 10px;
`;

const a = styled.div`
  color: white;
`;

const Footer = () => {
  return (
    <div>
      <Box>
        <h1 style={{}}>Created With ❤️ By:</h1>
        <Row>
          <a href="https://github.com/dannythedeveloper1">Danny Kebede</a>
          <a href="https://github.com/andrewjspivey">Andrew Spivey</a>
          <a href="https://github.com/aleon510">Alex Leon</a>
          <a href="https://github.com/jerniceduncan"> Jernice Duncan</a>
        </Row>
      </Box>
    </div>
  );
};

export default Footer;
