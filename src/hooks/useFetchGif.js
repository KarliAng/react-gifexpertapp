import { useState, useEffect } from "react"
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifts = (category) => { 
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
        .then( imgs => {

            setTimeout(() => {

                console.log(imgs);
                setState({
                    data: imgs,
                    loading:false
                });
            }, 1000);
        })
    },[category])

    return state; // {data:[], loading: true};
}