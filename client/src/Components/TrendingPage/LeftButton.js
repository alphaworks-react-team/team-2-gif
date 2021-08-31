import React from 'react';
import styled from 'styled-components';

const LeftAr = styled.div`
	font-size: 0;
	line-height: 0;
	top: 50%;
	width: 20px;
	height: 20px;
	cursor: pointer;
	color: transparent;
	border: none;
	outline: 0;
	background: 0 0;

	&::before {
		content: '<' !important;
		font-size: 50px;
		font-weight: 800;
		line-height: 1;
		color: white;
		background: none;
		width: 32px;
		height: 32px;
		border-radius: 4px;
		border: solid 1px #d2d2d2;
	}
`;

const LeftButton = props => {
	return (
		<div>
			<LeftAr onClick={props} />
		</div>
	);
};

export default LeftButton;
