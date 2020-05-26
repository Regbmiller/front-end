import React, { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

//Consume context object
import { AddClassContext } from '../../contexts/AddClassContext';





export default function AddClassButton() {
    
    //Pulling AddClass Boolean from InstDashboard Context Object
    //calling the useContext hook and passing the context object
	const { addClass, setAddClass } = useContext(AddClassContext)

    const [allClasses, setAllClasses] = useState([])

    useEffect(() => {
        api().get(`/api/classes`)
            .then(res => {
                
                setAllClasses(res.data)
                

            })
            .catch(err => {
                
            })
    }, [])
    
    

    //Sets Add Class to True to Hide AddClass Button and render Class List
    const handleAddClass = () =>{

        setAddClass(true);

    }

    return (
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                
                {!addClass && 

                    <div onClick={handleAddClass} style={{width:'150px', backgroundColor:'#f1f1f1', borderRadius:'5px', padding:'20px'}}>

                        <span>Add Class </span>
                        
                        <span style={{marginLeft:'10px'}}>{<FontAwesomeIcon icon={faPlusSquare} />}</span>
                        
                    </div>
                
                }


            </div>

            
        </>
    )
}