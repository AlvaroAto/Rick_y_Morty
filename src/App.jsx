import React, { useState,useEffect } from "react";

//assets

//components
// import HeaderH2 from "./components/Text/Headers/HeaderH2";

//containers
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import CharacterList from "./containers/CharactersList/CharactersList";
import CharacterItem from "./containers/CharacterItem/CharacterItem";
import ModalContent from "./containers/MainModal/ModalContent/ModalContent";

//hooks
import { useModal } from "./hooks/use-modal";
import { useCharacters } from './services/rickandmorty/rickandmorty-services';
import MainModal from "./containers/MainModal/MainModal";


function App() {

  const { handleModal, modalOpened } = useModal();

  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const characterService = useCharacters();
  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const { results } = await characters.data;

      setCharacterList(results);
    }
    getCharacterList();
  },[])

  const handleCharacter = async (url) => {
    const character = await characterService.getCharacter(url);
    const characterInfo = await character.data;
    setSelectedCharacter(characterInfo);
    handleModal(true);
  };

  return (
    <Main>      
      <Header>
        <Nav color="white">
            <a href="./">Inicio</a>
            <a href="./">Contacto</a>
        </Nav>
      </Header>
      <Main>
          <CharacterList>
              {
                characterList.map((character, index) => {
                  return (
                    <CharacterItem 
                      key={index} 
                      name={character.name}
                      sheet={`Ficha nº: `+character.id+` Ficha completa de `+character.name+` pulsando en [Ver más].`}
                      image={character.image}
                      vertical={character.species+` `+character.status}
                      handleClick={() => handleCharacter(character.url)}
                      buttonText="ver más"
                    />
                  )
                })
              }
          </CharacterList>
      </Main>
      {
        modalOpened && (
          <MainModal 
            handleClick={()=> handleModal(false)}
            img={selectedCharacter.image}
          >
            {
              <ModalContent
                id={ selectedCharacter.id }
                name={ selectedCharacter.name }
                status={ selectedCharacter.status }
                specie={ selectedCharacter.specie }                
                type={ selectedCharacter.type }
                gender={ selectedCharacter.gender }
                origin={ selectedCharacter.origin[`name`]}
                location={ selectedCharacter.location[`name`]}
              >
              </ModalContent>
            }
          </MainModal>
        )
      }      
    </Main>
  );
}

export default App;
