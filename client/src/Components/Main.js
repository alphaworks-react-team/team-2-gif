import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100%;
	min-width: 80vw;
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
