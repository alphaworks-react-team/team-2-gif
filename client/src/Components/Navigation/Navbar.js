import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
width: 100%;
height: 40%;
background-color: blue;
display: flex;
justify-content: space-between;
`;

// const Logo = styled.img`
// background-color: red;
// background-image: url(${Logo});
// height: 100%;
// width: 200px;
// display: flex;
// align-items: center;
// justify-content: center;
// `;
const NavMenu = styled.div`

background-color: green;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

`;
const NavLink = styled.div`
display: flex;
outline: none;

color: white;

padding: 10px;
`;
const Navbar = () => {
return (
	
	<Nav>
	{/* <Logo /> */}
		<NavMenu>
		
		<NavLink to="/child-a"
            activeStyle={{backgroud:'blue', color:'white' }}
            exact>
			Trending
		</NavLink>
		<NavLink to='/search' activeStyle>
			Search Page
		</NavLink>
		<NavLink to='/search' activeStyle>
			Favorite Page
		</NavLink>
		
		</NavMenu>
	</Nav>
	
);
};

export default Navbar
