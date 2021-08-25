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

const HomeCategories = ({categories}) => {


    console.log(categories)
    return (
        <StyledGrid>
            {categories.map((category, index) => (
                <StyledCategory key={index}>
                    <h3 style={{position: 'absolute', color: 'white'}}>{category.name}</h3>
                    <img src={category.gif.images.fixed_width.url} style={{width: '100%'}} alt=""/>
                </StyledCategory>
            ))}
        </StyledGrid>
    )
}

export default HomeCategories
