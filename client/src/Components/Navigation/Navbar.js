import React from 'react';
import styled from 'styled-components';
import giphy from '../Image/giphy209px.png';
const Nav = styled.div`
	width: 100%;
	height: 70px;
	background-color: #121212;
	display: flex;
	justify-content: flex-start;
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
const NavLink = styled.div`
	display: flex;
	padding: 10px;
	color: #ffff;

	span {
		font-size: 20px;
		font-weight: 600;
		/* background-image: linear-gradient(transparent 15px, #F243B3 50%, #FFCA47 100%); */
		background: rgb(11, 191, 255);
		background: linear-gradient(
			
			90deg,
			rgba(11, 191, 255, 1) 0%,
			rgba(126, 79, 255, 1) 50%,
			rgba(198, 61, 212, 1) 100%
		);
	}
`;
const Navbar = () => {
return (
	
	<Nav>
	<div>

	<Logo />
	</div>
	<div>
		<NavMenu>
		
		<NavLink>
			<span>Trending</span>
		</NavLink>
		<NavLink>
			<span>Search Gifs</span>
		</NavLink>
		<NavLink>
			<span>Favorite Gifs</span>
		</NavLink>
		
		</NavMenu>
		</div>
	</Nav>
	
);
};

export default Navbar
