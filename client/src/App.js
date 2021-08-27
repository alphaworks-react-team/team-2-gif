import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Components/HomeSearch/Search';
import HomeCategories from './Components/HomeCategories/HomeCategories';
import Main from './Components/Main';
import './App.css';
import HomeTrending from './Components/HomeTrending/HomeTrending';
import TrendingPage from './Components/TrendingPage/TrendingPage';
import SearchPage from './Components/SearchPage/SearchPage';
import Modal from './Components/Modal/Modal';
import Paginator from './Components/Paginator/Paginator';

const App = () => {
	const [trending, setTrending] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchedGifs, setSearchedGifs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [page, setPage] = useState(0);
	const [modalDisplay, setModalDisplay] = useState(false);
	const [currentGif, setCurrentGif] = useState({});

	useEffect(() => {
		axios.get('/api').then(res => {
			console.log(res);
			setTrending(res.data);
		});
		axios
			.get('/categories')
			.then(res => {
				console.log(res);
				setCategories(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (page > 0) {
			axios
				.get(`/search/${searchTerm}/${page}`)
				.then(res => {
					console.log(res);
					setSearchedGifs(res.data);
				})
				.catch(err => console.log(err));
		}
	}, [page]);

	const incrementPage = () => {
		setPage(page => page + 50);
	};

	const decrementPage = () => {
		setPage(page => page - 50);
	};

	const onSearchSubmit = searchTerm => {
		setSearchTerm(searchTerm);
		axios
			.get(`/search/${searchTerm}/0`)
			.then(res => {
				console.log(res);
				setSearchedGifs(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className='App'>
			<Main>
				<Search onSearchSubmit={onSearchSubmit} />

				<TrendingPage
					setModalDisplay={setModalDisplay}
					setCurrentGif={setCurrentGif}
					trending={trending}
				/>

				{searchedGifs.length > 1 ? (
					<div>
						<h1 style={{ color: 'white', margin: '0px 0px 20px 35px' }}>
							{searchTerm}
						</h1>
						<SearchPage
							setModalDisplay={setModalDisplay}
							setCurrentGif={setCurrentGif}
							searchedGifs={searchedGifs}
						/>
						<Paginator
							page={page}
							incrementPage={incrementPage}
							decrementPage={decrementPage}
						/>
					</div>
				) : (
					<div>
						<HomeTrending trending={trending} />
						<HomeCategories
							categories={categories}
							clickedSearch={onSearchSubmit}
						/>
					</div>
				)}
				<Modal shown={modalDisplay}>
					<img src={currentGif.images?.original.url} alt='' srcSet='' />
					<button onClick={() => setModalDisplay(false)}>Close</button>
					<button>Copy Link</button>
				</Modal>
			</Main>
		</div>
	);
};

export default App;
