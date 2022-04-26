import React, { useState, useEffect } from "react";

//assets

//components

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import CharacterList from "../../containers/CharactersList/CharactersList";
import CharacterItem from "../../containers/CharacterItem/CharacterItem";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";

//hooks
import { useModal } from "../../hooks/use-modal";
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';
import MainModal from "../../containers/MainModal/MainModal";
import PageNavegation from "../../containers/PageNavegation/PageNavegation";


function Home() {

  const { handleModal, modalOpened } = useModal();

  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const characterService = useCharacters();
  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const result = await characters.data;
      console.log(result);
      setCharacterList(result);
    }
    getCharacterList();
  },[])

  const handleCharacter = async (url) => {
    const character = await characterService.getCharacter(url);
    const characterInfo = await character.data;
    setSelectedCharacter(characterInfo);
    handleModal(true);
  };

  const handleCharacterPagination = async (url) =>{
    const character = await characterService.getCharacter(url);
    const result = await character.data;
    setCharacterList(result);
  };

  return (
    <Main>      
      <Header />
      <Main>
          <CharacterList>
              {
                characterList.results && characterList.results.map((character, index) => {
                  return (
                    <CharacterItem 
                      key={index} 
                      name={character.name}
                      sheet={`Ficha nº: `+character.id+` Ficha completa de `+character.name+` pulsando en [Ver más].`}
                      image={character.image}
                      vertical={character.species+` `+character.status}
                      handleClick={() => handleCharacter(character.url)}
                      buttonText="ver más"
                    >
                      <span>ver más</span>
                    </CharacterItem>
                  )
                })
              }
          </CharacterList>
          {
            characterList.info && <PageNavegation
              prevUrl={characterList.info.prev}
              nextUrl={characterList.info.next}
              onClick={(url)=>handleCharacterPagination(url)}
            />
          }
          
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

export default Home;
