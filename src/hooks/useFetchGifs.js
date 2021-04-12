import { useState,useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
      data:[],
      loading : true
  });

  useEffect(() => {
    getGif(category)
        .then(imgs =>{
            setTimeout(()=>{
                //console.log(imgs);
                setstate({
                    data:imgs,
                    loading:false
                }); 
            },3000);
            
        })
  },[category])
  return state; //{data:[], loading : true}
}
