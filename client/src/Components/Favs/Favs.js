import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Favs = ({
	favGif,
	setModalDisplay,
	setCurrentGif,
	removeFavGif,
	favColor,
}) => {
	const styles = {
		// height: "500px",
		display: "flex",
		flexFlow: "row wrap",
		img: {
			marginRight: "10px",
		},
	};
	const iconStyles = {
		position: "absolute",
		transform: "translateY(-45px)",
		display: "flex",
		alignSelf: "flex-start",
		paddingLeft: "83%",
	};

	return (
		<div style={styles}>
			{favGif.map((favs, index) => (
				<div key={index} style={styles.img} style={{position:"relative"}}>
					<img
						src={favs.image}
						alt=""
						onClick={() => {
							setModalDisplay(true);
							setCurrentGif(favs);
						}}
					/>
					<AiFillHeart
						onClick={() => removeFavGif(favs.id)}
						color={favColor(favs.id) ? "red" : "pink"}
						size="2rem"
						style={iconStyles}
					/>
				</div>
			))}
		</div>
	);
};

export default Favs;
