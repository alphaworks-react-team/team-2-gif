import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const TrendingStyles = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	transition: transform 0.5s ease;
	
	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;

const StyledGrid = styled.div`
	line-height: 1.1;
	-webkit-column-count: 4;
	-webkit-column-gap: 10px;
	-moz-column-count: 4;
	-moz-column-gap: 10px;
	column-count: 4;
	column-gap: 10px;
`;
const Title = styled.h3`
font-size: 25px;
	font-weight: 500;

	color: #ffff;
`;



const TrendingPage = ({
	trending,
	setModalDisplay,
	setCurrentGif,
	addFavGif,
}) => {
	const iconStyles = {
		position: 'absolute',
		transform: 'translateY(-45px)',
		display: 'flex',
		alignSelf: 'flex-end',
		paddingLeft: '87%',
	};
	return (
		<div >
			<Title>Trending</Title>
			<StyledGrid>
				{trending.map((trending, index) => (
					<div
						style={{ overflow: 'hidden', width: '100%', marginBottom: '10px' }}
					>
						<TrendingStyles key={index}
						
						>
							<img
								src={trending.images.fixed_width.url}
								style={{ width: '100%', borderRadius: '10px' }}
								alt=''
								onClick={() => {
									setModalDisplay(true);
									setCurrentGif(trending);
								}}
							/>
							<AiFillHeart
								onClick={() =>
									addFavGif(trending.images.fixed_width.url, trending.id)
								}
								color='white'
								size='2rem'
								style={iconStyles}
							/>
						</TrendingStyles>
					</div>
				))}
			</StyledGrid>
		</div>
	);
};

export default TrendingPage;
