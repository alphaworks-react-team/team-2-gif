import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/HomeSearch/Search";
import HomeCategories from "./Components/HomeCategories/HomeCategories";
import Main from "./Components/Main";
import "./App.css";
import HomeTrending from "./Components/HomeTrending/HomeTrending";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Modal from "./Components/Modal/Modal";
import FavModal from "./Components/Modal/FavModal";
import Paginator from "./Components/Paginator/Paginator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favs from "./Components/Favs/Favs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/Navbar";

const App = () => {
	const [trending, setTrending] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchedGifs, setSearchedGifs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [offset, setOffset] = useState(0);
	const [page, setPage] = useState(1);
	const [modalDisplay, setModalDisplay] = useState(false);
	const [currentGif, setCurrentGif] = useState({});
	const [favGif, setFavGif] = useState([]);

	useEffect(() => {
		const favs = localStorage.getItem("favs");
		if (favs == null) {
			setFavGif([]);
			localStorage.setItem("favs", JSON.stringify([]));
		} else {
			setFavGif(JSON.parse(favs));
		}
	}, []);

	useEffect(() => {
		axios.get("/api").then((res) => {
			console.log(res);
			setTrending(res.data);
		});
		axios
			.get("/categories")
			.then((res) => {
				console.log(res);
				setCategories(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	// this use effect for pagination
	useEffect(() => {
		if (offset >= 0) {
			axios
				.get(`/search/${searchTerm}/${offset}`)
				.then((res) => {
					console.log(res);
					setSearchedGifs(res.data);
				})
				.catch((err) => console.log(err));
		}
	}, [offset, searchTerm]);

	const incrementOffset = () => {
		setOffset((offset) => offset + 50);
	};
	const decrementOffset = () => {
		setOffset((offset) => offset - 50);
	};

	const favColor = (id) => {
		const favsCopy = [...favGif];
		const existingIds = favsCopy.map((favs) => favs.id);
		if (!existingIds.includes(id)) {
			return false;
		}
		return true;
	};

	const removeFavGif = (id) => {
		const favsCopy = [...favGif];
		const newFavs = favsCopy.filter((favs) => favs.id !== id);
		localStorage.setItem("favs", JSON.stringify(newFavs));
		setFavGif(newFavs);
	}

	const addFavGif = (image, id) => {
		const favsCopy = [...favGif];
		const existingIds = favsCopy.map((favs) => favs.id);
		if (!existingIds.includes(id)) {
			favsCopy.push({ image: image, id: id });
			localStorage.setItem("favs", JSON.stringify(favsCopy));
			setFavGif(favsCopy);
		} else {
			const newFavs = favsCopy.filter((favs) => favs.id !== id);
			localStorage.setItem("favs", JSON.stringify(newFavs));
			setFavGif(newFavs);
		}
	};

	const onSearchSubmit = (searchTerm) => {
		setSearchTerm(searchTerm);
		setOffset(0);
		setPage(1);
		axios.get(`/search/${searchTerm}/${offset}`)
			.then((res) => {
				console.log(res);
				setSearchedGifs(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<Router>
				<Main>
					<Navbar />
					<Search onSearchSubmit={onSearchSubmit} offset={offset} page={page} />
					<Switch>
						<Route exact path="/">
							<HomeTrending trending={trending} />
							<HomeCategories
								categories={categories}
								clickedSearch={onSearchSubmit}
							/>
						</Route>
						<Route exact path="/trending">
							<TrendingPage
								setModalDisplay={setModalDisplay}
								setCurrentGif={setCurrentGif}
								trending={trending}
								addFavGif={addFavGif}
								favColor={favColor}
							/>
							<Modal
								shown={modalDisplay}
								img={currentGif.images?.original.url}
								title={currentGif.title}
								clickProp={() =>
									navigator.clipboard.writeText(currentGif.images.original.url)
								}
							>
								<h3
									style={{
										padding: "0",
										backgroundColor: "black",
										color: "white",
										border: "none",
										cursor: "pointer",
									}}
									onClick={() => setModalDisplay(false)}
								>
									Close
								</h3>
							</Modal>
						</Route>
						<Route exact path="/favs">
							<Favs favGif={favGif} 
							setCurrentGif={setCurrentGif} 
							setModalDisplay={setModalDisplay}
							removeFavGif={removeFavGif} favColor={favColor}
							/>
							<FavModal
								shown={modalDisplay}
								img={currentGif?.image}
								removeFavGif={removeFavGif}
								clickProp={() =>
									navigator.clipboard.writeText(currentGif.image)
								}
							>
								<h3
									style={{
										padding: "0",
										backgroundColor: "black",
										color: "white",
										border: "none",
										cursor: "pointer",
									}}
									onClick={() => setModalDisplay(false)}
								>
									Close
								</h3>
							</FavModal>
						</Route>
						<Route path="/search/:searchTerm/:page">
							<h1 style={{ color: "white", margin: "0px 0px 20px 35px" }}>
								{searchTerm}
							</h1>
							<SearchPage
								searchedGifs={searchedGifs}
								setModalDisplay={setModalDisplay}
								setCurrentGif={setCurrentGif}
								searchedGifs={searchedGifs}
								addFavGif={addFavGif}
								favColor={favColor}
							/>
							<Paginator
								offset={offset}
								page={page}
								setPage={setPage}
								incrementOffset={incrementOffset}
								decrementOffset={decrementOffset}
							/>
							<Modal
								shown={modalDisplay}
								img={currentGif.images?.original.url}
								title={currentGif.title}
								clickProp={() =>
									navigator.clipboard.writeText(currentGif.images.original.url)
								}
							>
								<h3
									style={{
										padding: "0",
										backgroundColor: "black",
										color: "white",
										border: "none",
										cursor: "pointer",
									}}
									onClick={() => setModalDisplay(false)}
								>
									Close
								</h3>
							</Modal>
						</Route>
					</Switch>
					<Footer />
				</Main>
			</Router>
		</div>
	);
};

export default App;
