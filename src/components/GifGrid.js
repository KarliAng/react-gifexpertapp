import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'; 
// import { getGifs } from './helpers/getGifs';

export const GifGrid = ({category}) => {
  
    const {data:images,loading} = useFetchGifts( category);

    return (
    <>
        <h3 className='animate__animated animate__bounce_fadeIn'> { category } </h3>
        {loading && <p className='animate__animated animate__bounce_flash'>Loading...</p>}

        <div className='card-grid'> 
            
                { 
                    images.map( (img) => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
        </div>
    </>
  )
}
