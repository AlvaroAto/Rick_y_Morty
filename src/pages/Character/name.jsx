import React, { useState, useEffect } from "react";

//assets
import loadGif from '../../assets/img/loading-portal.gif';
import back from '../../assets/img/back.svg';

//components
// import HeaderH2 from "../../components/Text/Headers/HeaderH2";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
// import Section from "../../containers/Section";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";
import Footer from "../../containers/Footer/Footer";
import Section from "../../containers/Section/Section";
import ColoredDiv from "../../containers/ColoredDiv/ColoredDiv";
import Div from "../../containers/Div/Div";

//hooks
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';
import { useParams } from "react-router";

//pagination
import { Link } from 'react-router-dom';

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
        return <div id="loading"><img src={loadGif} alt="cargando..."/></div>
    }

  return (  
    <Main>      
        <Header />
        <Section>
            <>            
            <Title title={selectedCharacter.name}></Title>
            <Image
                image={selectedCharacter.image}
                alt={selectedCharacter.name}
            >
            </Image>
            <ColoredDiv
                color="rgba(0, 177, 183, 0.4)"
            >
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
            </ColoredDiv>
            <Div
                color="#00686B"
            >
                <Link to="/characters"><img src={back} alt="" />back</Link>                
            </Div>
            </>
        </Section>
        <Footer>
            <FooterLogo />
        </Footer>
    </Main>
    );
};

export default CharacterDetail;
