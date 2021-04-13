import React, { useState } from 'react'
import AddCategory from './componenetes/AddCategory';
import { GifGrid } from './componenetes/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['']);
    /*const handleAdd = () =>{
       // setCategorias([...categorias,'Vegeta']);
        setCategorias(cats =>[...cats,'Vegeta ssj']);
    }*/
    return (
        <>

           <h2>Buscador de Gifs</h2>
           <AddCategory setCategorias={setCategorias}/>
           <hr />
           <ol>
             {
                 categorias.map(category => 
                    <GifGrid 
                        key = {category} 
                        category = {category}
                    />
                 )
             }   
            </ol> 
        </>
    )
}
//export default GifExpertApp();