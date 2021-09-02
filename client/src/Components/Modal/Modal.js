import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
const ModalStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease-in;
	background-color: rgb(0, 0, 0, 0.5);
	z-index: 10000;
`;
const ModalContent = styled.div`
	min-width: 500px;
	background-color: #080808;
`;
const ModalHeader = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
`;
const ModalTitle = styled.h2`
	color: white;
	padding: 10px;
`;
const ModalBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ModalFooter = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-around;
`;
const ModalImg = styled.img`
	opacity: 0.5;
	color: rgba(63, 191, 63, 0.8);
	width: 100%;
	height: 100%;
`;

const Modal = props => {
	const [copied, setCopied] = useState(false);

	const styleModal = {
		visibility: props.shown === true ? 'visible' : 'hidden',
	};

	const handleCopy = () => {
		props.clickProp();
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 7000);
	};

	return (
		<ModalStyle style={styleModal} onClick={props.onClick}>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>{props.title}</ModalTitle>
				</ModalHeader>
				<ModalBody>
					{copied ? (
						<ModalBody>
							<ModalImg src={props.img} />
							<h1 style={{ position: 'absolute', color: 'green' }}>Copied</h1>
						</ModalBody>
					) : (
						<img src={props.img} alt='broken' />
					)}
				</ModalBody>
				<ModalFooter>
					{props.children}
					<CopyButton onClick={handleCopy} />
				</ModalFooter>
			</ModalContent>
		</ModalStyle>
	);
};

export default Modal;
