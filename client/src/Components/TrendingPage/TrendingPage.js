import React from 'react';
import styled from 'styled-components';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const TrendingStyles = styled.div`
	/* position: absolute; */
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
const Title = styled.h1`
	font-weight: 700;
	margin: 0;
	padding: 0;
	color: white;
`;
const TrendingPage = ({ trending }) => {
	return (
		<div style={{ height: '110%' }}>
			<Title>Trending</Title>
			<StyledGrid>
				{trending.map((trending, index) => (
					<TrendingStyles key={index}>
						<img
							src={trending.images.fixed_width.url}
							style={{ width: '100%', height: '200px' }}
							alt=''
						/>
					</TrendingStyles>
				))}
			</StyledGrid>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<LeftButton />
				<RightButton />
			</div>
		</div>
	);
};

export default TrendingPage;
