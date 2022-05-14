import axios from "axios";

export const getCharactersFiltered = async(name = '', gender = '', status='') =>{
    return axios(`https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}&status=${status}`,{
        method: 'get'
      });
};