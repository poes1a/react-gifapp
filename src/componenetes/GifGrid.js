import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
const {data:images,loading} = useFetchGifs(category);   
//  const [Image, setImage] = useState([]);

//     useEffect(()=>{
//         getGif(category)
//             .then( img =>setImage(img));
//     },[category]);  
    
    
    return (
        <>
            <h3 className = "animate__animated animate__fadeIn">{category}</h3>
            { loading &&  <p>Cargando</p>}
         {    <div className="card-grid">
                
                {
                    images.map((img)=>
                        <GifGridItem 
                            {...img}
                            key={img.id} 
                        />
                    )
                }

            </div>}
        </>

    )
}

