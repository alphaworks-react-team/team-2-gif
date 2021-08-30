import styled from "styled-components";

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
    padding:3.5px;
    font-weight: 700;
	/* border-radius: 5px; */
	border: none;
	transition: transform 0.1s ease-in;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.hbgColor};
		transform: scale(1.02);
	}
`;
