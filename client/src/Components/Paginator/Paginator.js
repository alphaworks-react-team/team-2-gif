import React, {useState, useEffect} from 'react';
import {Button} from '../HomeSearch/styles'
import axios from 'axios'

const Paginator = ({page, incrementPage, decrementPage}) => {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        
    }

    return (
        <div style={{marginBottom: '40px'}}>
            <div style={styles}>
                <h2 style={{color: 'white'}}>Page {page + 1}</h2>
            </div>
            <div style={styles}>
                <Button style={{width: '50px'}} bgColor="#007bff" size='30px' color="white" onClick={decrementPage}>&lt;</Button>
                <p>---------</p>
                <Button style={{width: '50px'}} bgColor="#007bff" size='30px' color="white" onClick={incrementPage}>&gt;</Button>
            </div>
        </div>
    )
}

export default Paginator
