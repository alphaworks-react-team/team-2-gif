import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchData, setSearchData] = useState([]);
	// useEffect(() => {}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get("/api/search")
			.then((res) => {
				console.log(res);
				setSearchData(res.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="search giphy"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button>search</button>
			</form>
			{searchData.length > 0 && <h1>hi</h1>}
		</div>
	);
};

export default Search;
