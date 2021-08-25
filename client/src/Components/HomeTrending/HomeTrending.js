import React from "react";
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
	};
	return (
		<div styles={styles}>
			<h1 style={{ color: "white", margin: 0 }}>Trending</h1>
			<div style={styles.gifs}>
				{trending.map((gif, index) => (
					<img
						key={gif.index}
						src={gif.images.fixed_height.url}
						alt=""
						style={styles.img}
					/>
				))}
			</div>
		</div>
	);
};
//
export default HomeTrending;
