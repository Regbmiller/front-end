import React from 'react';

import { makeStyles } from '@material-ui/core';





const useStyles = makeStyles({
    category: {
        textDecoration: 'none',
        color: 'black',
        border: '2px solid #636363',
        borderRadius: '5px',
        padding: '10px 25px',
        backgroundColor: '#AEEA4F'
    }
})

export default function Category(props) {

    const classes = useStyles();



    const handleClick = e => {
        
        props.setCategory({
            id:e.target.id,
            name:e.target.innerText
        })

    }

    return (

        
            <div>
                <button id={props.category.id} className={classes.category} onClick={handleClick}>{props.category.name}</button>
            </div>
        
    )
}