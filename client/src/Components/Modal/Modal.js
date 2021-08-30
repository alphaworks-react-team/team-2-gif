import styled from 'styled-components';

const ModalStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	transition: 0.3s ease-in;
	background-color: rgb(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
	min-width: 500px;
	background-color: #080808;
`;
const ModalHeader = styled.div`
	padding: 10px;
`;
const ModalTitle = styled.h2`
	color: white;
	padding: 10px;
`;
const ModalBody = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ModalFooter = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: space-around;
`;
const Modal = props => {
	const styleModal = {
		visibility: props.shown === true ? 'visible' : 'hidden',
	};
	

	return (
		<ModalStyle style={styleModal} onClick={props.onClick}>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>{props.title}</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<img src={props.img} alt='broken' />
				</ModalBody>
				<ModalFooter>
				
						{props.children}
					
				</ModalFooter>
			</ModalContent>
		</ModalStyle>
	);
};

export default Modal;
