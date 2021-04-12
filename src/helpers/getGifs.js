


export const getGif = async(category) =>{
    const url = 'https://api.giphy.com/v1/gifs/search?q='+encodeURI(category)+'&limit=10&api_key=Z24Gz7JOaFTsByNS3NkrC4TNHrGW5BnZ';

    const res = await fetch(url);
    const {data}  = await res.json();
    const gifs = data.map( img=>{
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    });
    return gifs;
  
}