import React from 'react';
import styled from 'styled-components';
import giphy from '../Image/giphy209px.png';
import { Button } from '../HomeSearch/styles';
import { Link } from 'react-router-dom';
const Nav = styled.div`
	width: 100%;
	height: 70px;
	background-color: #121212;
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.div`
	background-image: url(${giphy});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	height: 100%;
	width: 200px;

	display: flex;
	align-items: center;
	justify-content: center;
	border-color: #121212;
`;
const NavMenu = styled.div`
	background-color: #121212;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;

const Navbar = ({ getRandom, setModalDisplay }) => {
	const linkStyles = {
		display: 'flex',
		padding: '10px',
		color: '#ffff',
		fontWeight: '600',
		fontSize: '23px',
		textDecoration: 'none',
	};
	const buttonStyles = {
		display: 'flex',
		alignItems: 'center',
	};
	return (
		<Nav>
			<Link to='/'>
				<Logo />
			</Link>
			<div style={linkStyles}>
				<NavMenu>
					<Link to='/trending' style={linkStyles}>
						Trending
					</Link>

					<Link to='/favs' style={linkStyles}>
						Favorite Gifs
					</Link>
				</NavMenu>
			</div>
			<div style={buttonStyles}>
				<Button
					type='button'
					bgColor='#7e4fff'
					color='#ffff'
					size='x-large'
					color='white'
					onClick={() => {
						getRandom();
					}}
				>
					Random Gifs
				</Button>
			</div>
		</Nav>
	);
};

export default Navbar;
