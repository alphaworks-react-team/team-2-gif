import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./styles";
//height:100%;
//width:10vh
const Search = (props) => {
	const [searchTerm, setSearchTerm] = useState("");
	// const [searchData, setSearchData] = useState([])

	const onChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		props.onSearchSubmit(searchTerm);
	};
	const styles = {
		input: {
			backgroundColor: "lightgray",
			border: "none",
			borderRadius: "5px",
            outline: "none",
            width: "50%",
            alignSelf:"center"
		},
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					style={styles.input}
					value={searchTerm}
					onChange={onChange}
					type="text"
					placeholder="search"
					name="search"
				/>
				<Button type="submit" bgColor="#007bff" size="small" color="white">
					Search
				</Button>
			</form>
		</div>
	);
};

export default Search;
