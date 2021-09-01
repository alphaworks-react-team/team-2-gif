import React from 'react'
import styled from "styled-components"
import {useHistory} from 'react-router'

const StyledCategory = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .5s ease;
    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`
const StyledGrid = styled.div`
    line-height: 1.1;
    -webkit-column-count: 4;
    -webkit-column-gap:   10px;
    -moz-column-count:    4;
    -moz-column-gap:      10px;
    column-count:         4;
    column-gap:           10px;
`

const StyledHeader = styled.h2`
    padding-left: 15px;
    position: absolute;
    background-image: linear-gradient(to left, violet,indigo,#0651a9, green, yellow, orange, red);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledImg = styled.img`
    width: 100%;
    border-radius: 10px;
    /* transition: transform .5s ease;
    :hover {
        transform: scale(1.3);
    } */
`

const HomeCategories = ({categories, clickedSearch}) => {
    const history = useHistory()

    const searchCategory = (index) => {
        clickedSearch(categories[index].name);
        history.push(`/search/${categories[index].name}/0`)
    }

    return (
        <div style={{marginTop: '35px'}}>
            <h1 style={{color: "white", margin: '10px'}}>Categories</h1>
        <StyledGrid>
            {categories.map((category, index) => (
                <div style={{overflow: 'hidden', width: '100%', marginBottom: '10px'}}>
                <StyledCategory key={index} onClick={() => searchCategory(index)} >
                    <StyledHeader>{category.name.toUpperCase()}</StyledHeader>
                    <StyledImg src={category.gif.images.fixed_width.url} alt=""/>
                </StyledCategory>
                    </div>
            ))}
        </StyledGrid>
        </div>
    )
}

export default HomeCategories
