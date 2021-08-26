const Modal = (props) => {
  const styleModal = {
    width: "500px",
    background: "white",
    border: "1px solid #ccc",
    transition: "1.1s ease-out",
    boxShadow: "-2rem 2rem 2rem rgba(black, 0.2)",
    filter: "blur(0)",

    opacity: " 1",
    visibility: "visible",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={styleModal} onClick={props.onClick}>
      {" "}
      <h1>hi???</h1>
    </div>
  );
};

export default Modal;
