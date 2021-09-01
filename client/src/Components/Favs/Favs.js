import React from "react";

const Favs = ({ favGif,setModalDisplay,
  setCurrentGif }) => {

	

	const styles = {
		height: "500px",
		display: "flex",
		flexFlow: "row wrap",
		img: {
			marginRight: "10px",
		},
	};

	return (
		<div style={styles}>
			{favGif.map((favs, index) => (
				<div key={index} style={styles.img}>
					<img src={favs.image} alt=""
					
					onClick={() => {
                setModalDisplay(true);
                setCurrentGif(favs.image);
								}}
					/>
					
				</div>
			))}
		</div>
	);
};

export default Favs;
