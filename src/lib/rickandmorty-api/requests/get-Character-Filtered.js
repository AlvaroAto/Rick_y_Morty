import axios from "axios";

export const getCharactersFiltered = async(name = '', gender = '') =>{
    return axios(`https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`,{
        method: 'get'
      });
};