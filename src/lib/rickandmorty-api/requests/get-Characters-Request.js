import axios from "axios";

export const getCharactersRequest = async() =>{
    return axios('https://rickandmortyapi.com/api/character',{
        method: 'get'
      });
};