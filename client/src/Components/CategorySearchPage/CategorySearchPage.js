import React from 'react'
import styled from "styled-components"

const StyledCategory = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`
const StyledGrid = styled.div`
    line-height: 2;
    -webkit-column-count: 4;
    -webkit-column-gap:   10px;
    -moz-column-count:    4;
    -moz-column-gap:      10px;
    column-count:         4;
    column-gap:           10px;
`

const CategorySearchPage = ({searchedGifs}) => {
    return (
        <StyledGrid>
            {searchedGifs.map((gif, index) => (
                <StyledCategory key={index}>
                    <h3 style={{position: 'absolute', color: 'white'}}>{gif.title}</h3>
                    <img src={gif.images.fixed_width.url} style={{width: '100%'}} alt=""/>
                </StyledCategory>
            ))}
        </StyledGrid>
    )
}

export default CategorySearchPage
