import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    // const [searchData, setSearchData] = useState([])
    
    const onChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.onSearchSubmit(searchTerm)
    }
    
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input value={searchTerm} onChange={onChange} type="text" placeholder= "search" name="search"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
