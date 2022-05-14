import { useState } from 'react'; 
import { getCharactersRequest } from '../../lib/rickandmorty-api/requests/get-Characters-Request'; 
import { getCharacterRequest } from '../../lib/rickandmorty-api/requests/get-Character-Request';
import { getCharactersFiltered } from '../../lib/rickandmorty-api/requests/get-Character-Filtered';

export const useCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characterListError, setCharacterListError] =useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest(); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            setLoading(false);
        }
    };

    const getCharacter = async (url) => {
        try{
            const characterResponse = await getCharacterRequest(url); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            setLoading(false);
        }
    };

    const getCharactersFilter = async (name,gender,status) => {
        try{
            const characterResponse = await getCharactersFiltered(name,gender,status); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            const message = error.response.status === 404 ? 'Personaje no encontrado' : 'server error';
            setErrorMessage(message);
            setLoading(false);
        }
    };

    return {
        getCharacters,
        getCharacter,
        getCharactersFilter,
        loading,
        characterListError,
        errorMessage
    }
}