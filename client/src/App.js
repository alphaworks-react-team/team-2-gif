import { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Search from './Components/HomeSearch/Search';
import Main from './Components/Main'
import TrendingPage from './Components/TrendingPage/TrendingPage'

const App = () => {
	const [trending, setTrending] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchedGifs, setSearchedGifs] = useState([]);

	useEffect(() => {
		axios
			.get('/api')
			.then(res => {
				console.log(res);
				setTrending(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const onSearchSubmit = searchTerm => {
		setSearchTerm(searchTerm);
		axios
			.get(`/search/${searchTerm}`)
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
			</Main>
		</div>
	);
};

export default App;
