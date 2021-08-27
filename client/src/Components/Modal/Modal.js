import styled from "styled-components";

const Modal = styled.modal`
  width: 500px;
  border: 3px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);

  opacity: 1;
  visibility: ${props.shown === true ? visible : hidden};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  background-position: center;
  background-size: cover;
`;

const Modal = (props) => {
  return (
    <div style={styleModal} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Modal;
