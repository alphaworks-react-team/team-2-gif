import styled from 'styled-components';

const TextArea = styled.div`
	display: flex;

	justify-content: space-around;
`;

const Modal = props => {
	const styleModal = {
		width: '500px',
		height: '500px',
		background: 'white',
		border: '1px solid #ccc',
		transition: '1.1s ease-out',
		boxShadow: '-2rem 2rem 2rem rgba(black, 0.2)',
		filter: 'blur(0)',
		display: 'flex',

		opacity: ' 1',
		visibility: props.shown === true ? 'visible' : 'hidden',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return (
		<div style={styleModal} onClick={props.onClick}>
			<div>{props.children}</div>
		</div>
	);
};

export default Modal;
