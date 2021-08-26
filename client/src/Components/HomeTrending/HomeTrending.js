import React from "react";
import styled from "styled-components";
import { Button } from "../HomeSearch/styles";
//height:30vh
//width:100%
const HomeTrending = ({ trending }) => {
	const styles = {
		height: "30vh",
		width: "100%",
		gifs: {
			display: "flex",
			overflowX: "auto",
			overflowY: "hidden",
		},
		img: {
			marginRight: "10px",
		},
        trend: {
            display: "flex",
            alignItems:"center",
        }
    };
    // const scroll = (scrollOffset) => {
	// 		ref.current.scrollLeft += scrollOffset;
	// 	};
	return (
		<div styles={styles}>
			<h1 style={{ color: "white", margin: 0 }}>Trending</h1>
			<div style={styles.trend}>
                {/* <Button bgColor="#007bff" onClick={() => scroll(-20)}>&lt;</Button> */}
				<Scroll style={styles.gifs}>
					{trending.map((gif, index) => (
						<img
							key={gif.index}
							src={gif.images.fixed_height.url}
							alt=""
							style={styles.img}
						/>
					))}
				</Scroll>
            {/* <Button onClick={() => scroll(20)} bgColor="#007bff" >&gt;</Button> */}
			</div>
		</div>
	);
};

const Scroll = styled.div`
	::-webkit-scrollbar {
		display: none;
	}
    /* scroll-margin-:left() */
	/* margin-left: 0px;
    margin-right: 150px; */
`;

export default HomeTrending;
