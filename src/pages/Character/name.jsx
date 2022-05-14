import React, { useState, useEffect } from "react";

//assets
import loadGif from '../../assets/img/loading-portal.gif';

//components
// import HeaderH2 from "../../components/Text/Headers/HeaderH2";

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
// import Section from "../../containers/Section";

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
            console.log(character);
            setSelectedCharacter(character);
        }catch(error){
            setError("Error "+error);
            console.log(error);
        }
    };

    useEffect(()=>{
        getCharacterInfo(`https://rickandmortyapi.com/api/character/${params.id}`);
    },[]);

    if(!selectedCharacter.hasOwnProperty('url')){
        return <img src={loadGif} alt="cargando..." />
    }

  return (  
    <Main>      
        <Header />
        <section>
                <>
                    <h2>{selectedCharacter.name}</h2>
                    <p>{ selectedCharacter.id }</p>
                    <p>{ selectedCharacter.name }</p>
                    <p>{ selectedCharacter.status }</p>
                    <p>{ selectedCharacter.specie } </p>               
                    <p>{ selectedCharacter.type }</p>
                    <p>{ selectedCharacter.gender }</p>
                    <p>{ selectedCharacter.origin[`name`]}</p>
                    <p>{ selectedCharacter.location[`name`]}</p>
                </>
        </section>
    </Main>
    );
};

export default CharacterDetail;