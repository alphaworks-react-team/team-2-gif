import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const TrendingStyles = styled.div`
	position: relative;
	width: 100%;
	height: auto;

	&:hover {
		border: 5px solid white;
		color: white;
		background: #fff;
	}
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

const iconStyles = {
	transform: "translateY(-50px)",
	display: "flex",
	alignSelf: "flex-end",
};

const TrendingPage = ({
	trending,
	setModalDisplay,
	setCurrentGif,
	addFavGif,
}) => {
	return (
		<div>
			<Title>Trending</Title>
			<StyledGrid>
				{trending.map((trending, index) => (
					<TrendingStyles key={index}>
						<>
							<img
								src={trending.images.fixed_width.url}
								width="100%"
								height="200px"
								alt=""
								onClick={() => {
									setModalDisplay(true);
									setCurrentGif(trending);
								}}
							/>
							<AiFillHeart
								onClick={() =>
									addFavGif(trending.images.fixed_width.url, trending.id)
								}
								color="white"
								size="2rem"
								style={iconStyles}
							/>
						</>
					</TrendingStyles>
				))}
			</StyledGrid>
		</div>
	);
};

export default TrendingPage;
