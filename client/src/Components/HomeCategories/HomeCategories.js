import React from 'react'
import styled from "styled-components"

const StyledCategory = styled.div`
    position: relative;
`
const StyledGrid = styled.div`
    width: 800px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const HomeCategories = ({categories}) => {


    console.log(categories)
    return (
        <StyledGrid>
            {categories.map((category, index) => (
                <StyledCategory key={index}>
                    <h3 style={{position: 'absolute', color: 'white'}}>{category.name}</h3>
                    <img src={category.gif.images.fixed_width.url} alt=""/>
                </StyledCategory>
            ))}
        </StyledGrid>
    )
}

export default HomeCategories
