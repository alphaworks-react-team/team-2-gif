import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-around; */
	/* align-items: center; */
	height: 100%;
	width: 80vw;
	/* box-sizing: border-box; */
	background-color: black;
`;

const Main = props => {
	return (
		<div>
			<MainContainer>{props.children}</MainContainer>
		</div>
	);
};

export default Main;
