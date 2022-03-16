import { useState } from 'react'; 
import { getCharactersRequest } from '../../lib/rickandmorty-api/requests/get-Characters-Request'; 

export const useCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characterListError, setCharacterListError] =useState("");

    const getCharacter = async () => {
        try{
            const characterResponse = await getCharactersRequest(); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            setLoading(false);
        }
    };

    return {
        getCharacter,
        loading,
        characterListError
    }
}