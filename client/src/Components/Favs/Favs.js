import React from "react";

const Favs = ({ favGif }) => {
	const styles = {
		height: "500px",
		display: "flex",
		flexFlow: " wrap",
		img: {
			marginRight: "10px",
		},
	};

	return (
		<div style={styles}>
			{favGif.map((favs, index) => (
				<div key={index} style={styles.img}>
					<img src={favs} alt="" />
				</div>
			))}
		</div>
	);
};

export default Favs;