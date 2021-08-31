import React from 'react';
import styled from 'styled-components';

const TrendingStyles = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;
const StyledGrid = styled.div`
	line-height: 2;
	-webkit-column-count: 4;
	-webkit-column-gap: 10px;
	-moz-column-count: 4;
	-moz-column-gap: 10px;
	column-count: 4;
	column-gap: 2px;
`;
const Title = styled.h3`
	font-weight: 300;
`;
const TrendingPage = ({ trending, setModalDisplay, setCurrentGif }) => {
	return (
		<div>
			<Title>Trending</Title>
			<StyledGrid>
				{trending.map((trending, index) => (
					<TrendingStyles key={index}>
						<img
							src={trending.images.fixed_width.url}
							width='100%'
							height='250px'
							alt=''
							onClick={() => {
								setModalDisplay(true);
								setCurrentGif(trending);
							}}
						/>
					</TrendingStyles>
				))}
			</StyledGrid>
		</div>
	);
};

export default TrendingPage;
