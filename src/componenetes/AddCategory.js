import React, { useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory({setCategorias}) {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }
    //e es un event
    const handleSubmit = (e)=>{
        e.preventDefault();
        //props.setCategorias(cats =>[...cats,'Vegeta ssj']);
        if(inputValue.trim().length>2){
            setCategorias(cats =>[inputValue,...cats]);
            setinputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>       
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}
AddCategory.propTypes ={
    setCategorias : PropTypes.func.isRequired
}


export default AddCategory
