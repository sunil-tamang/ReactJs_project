import axios from 'axios';

import * as actionTypes from './actionTypes';


const URL = 'http://localhost:3004';


export const darkTheme = (open) =>{

    return{
        type: actionTypes.DARK_THEME,
        payload:open,
    };

};



export function artistListAll(){
    const request = axios.get(`${URL}/artists?_limit=2`)
                    .then(response => response.data)

    return {
        type:  actionTypes.GET_ARTISTS_ALL,
        payload: request   
    }
}

export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)
    return {
        type:  actionTypes.GET_ARTISTS,
        payload: request
    }
}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)

    return {
        type:  actionTypes.GET_ARTISTS_DETAIL,
        payload: request   
    }
}


export function clearArtistDetail(){
    return{
        type: actionTypes.CLEAR_ARTIST_DETAIL,
        payload:null
    }
}

