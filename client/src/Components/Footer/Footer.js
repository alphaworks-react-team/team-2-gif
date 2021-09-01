import styled from "styled-components";

const Box = styled.div`
  background: #121212;
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

const Anchor = styled.a`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 19px;
`;

const Footer = () => {
  return (
    <div>
      <Box>
        <h1 style={{}}>Created With ❤️ By:</h1>
        <Row>
          <Anchor href="https://github.com/dannythedeveloper1">
            Danny Kebede
          </Anchor>
          <Anchor href="https://github.com/andrewjspivey">Andrew Spivey</Anchor>
          <Anchor href="https://github.com/aleon510">Alex Leon</Anchor>
          <Anchor href="https://github.com/jerniceduncan">
            Jernice Duncan
          </Anchor>
        </Row>
      </Box>
    </div>
  );
};

export default Footer;
