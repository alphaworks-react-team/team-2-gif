import React from 'react';
import styled, {keyframes} from 'styled-components';
import giphy from '../Image/giphy209px.png';
import { Button } from '../HomeSearch/styles';
import { Link } from 'react-router-dom';
const Nav = styled.div`
	width: 100%;
	height: 70px;
	background-color: #121212;
	display: flex;
	padding: 15px;
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
	align-self: flex-start;
	border-color: #121212;
`;
const NavMenu = styled.div`
	background-color: #121212;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;
`;
const NavLink = styled.div`
	display: flex;
	padding: 10px;
	color: #ffff;
`;

const StyledHeader = styled.h2`
	display: flex;
	padding: 10px;
	font-weight: 600;
	text-decoration-color: linear-gradient(90deg, rgba(11,191,255,1) 0%, rgba(126,79,255,1) 50%, rgba(198,61,212,1) 100%);
	color: white;

	@keyframes backgroundIMG {
		0% { background-image: none}
		25% { background-image: linear-gradient(90deg, rgba(11,191,255,0.2) 0%, rgba(126,79,255,0.2) 50%, rgba(198,61,212,0.2) 100%)}
		50% { background-image: linear-gradient(90deg, rgba(11,191,255,0.4) 0%, rgba(126,79,255,0.4) 50%, rgba(198,61,212,0.4) 100%)}
		75% { background-image: linear-gradient(90deg, rgba(11,191,255,0.6) 0%, rgba(126,79,255,0.6) 50%, rgba(198,61,212,0.6) 100%)}
		100% { background-image: linear-gradient(90deg, rgba(11,191,255,0.8) 0%, rgba(126,79,255,0.8) 50%, rgba(198,61,212,0.8) 100%)}
};
	:hover {
		animation-name: backgroundIMG;
		animation-duration: 0.1s;
		animation-fill-mode: forwards;
	};
`

const Navbar = ({ getRandom, setModalDisplay }) => {
	const linkStyles = {
		fontWeight: '600',
		textDecorationColor: 'linear-gradient(90deg, rgba(11,191,255,1) 0%, rgba(126,79,255,1) 50%, rgba(198,61,212,1) 100%)',
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
				<NavMenu >
					<Link to='/trending' style={linkStyles} >
						<StyledHeader>Trending</StyledHeader>
					</Link>
					<Link to='/favs'>
					<StyledHeader>Favorite Gifs</StyledHeader>
					</Link>
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
					Random Gif
				</Button>
				</NavMenu>
			{/* <div style={buttonStyles}>
			</div> */}
		</Nav>
	);
};

export default Navbar;
