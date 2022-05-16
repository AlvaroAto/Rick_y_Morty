import React, { useState, useEffect } from "react";

//assets
import loadGif from '../../assets/img/loading-portal.gif';

//components
// import HeaderH2 from "../../components/Text/Headers/HeaderH2";

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
// import Section from "../../containers/Section";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";

//hooks
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';
import { useParams } from "react-router";


const CharacterDetail = () =>{

    const params = useParams();
    const characterService = useCharacters();
    const [selectedCharacter, setSelectedCharacter] = useState({});
    const [error, setError] = useState("");

    const getCharacterInfo = async (url) => {
        try{
            const characterRequest = await characterService.getCharacter(url);
            const character = await characterRequest.data;
            setSelectedCharacter(character);
        }catch(error){
            setError("Error "+error);
        }
    };

    useEffect(()=>{
        getCharacterInfo(`https://rickandmortyapi.com/api/character/${params.id}`);
    },[]);

    if(!selectedCharacter.hasOwnProperty('url')){
        return <div id="loading"><img src={loadGif} alt="cargando..." /></div>
    }

  return (  
    <Main>      
        <Header />
        <ModalContent
                id={ selectedCharacter.id }
                name={ selectedCharacter.name }
                status={ selectedCharacter.status }
                species={ selectedCharacter.species }                
                type={ selectedCharacter.type }
                gender={ selectedCharacter.gender }
                origin={ selectedCharacter.origin[`name`]}
                location={ selectedCharacter.location[`name`]}
              >
        </ModalContent>
    </Main>
    );
};

export default CharacterDetail;
