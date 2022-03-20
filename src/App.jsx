import React, { useState,useEffect } from "react";

//assets

//components
import HeaderH2 from "./components/Text/Headers/HeaderH2"

//containers
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import CharacterList from "./containers/CharactersList/CharactersList";
import CharacterItem from "./containers/CharacterItem/CharacterItem";

//hooks
import { useModal } from "./hooks/use-modal";
import { useCharacters } from './services/rickandmorty/rickandmorty-services';
import MainModal from "./containers/MainModal/MainModal";


function App() {

  const { handleModal, modalOpened} = useModal();
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
    // handleModal(true);
  };

  return (
    <>      
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
                      sheet={`Numero: `+character.id+` Para ver la ficha completa de `+character.name+` pulse en ver mas. Gracias. `}
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
          <MainModal handleClick={()=> handleModal(false)}>
            {
              selectedCharacter.map((character, index) =>{

                return(
                  <HeaderH2 key={index} text={"Numero de expediente: "+character.id}></HeaderH2>
                  // "id": 1,
                  // "name": "Rick Sanchez",
                  // "status": "Alive",
                  // "species": "Human",
                  // "type": "",
                  // "gender": "Male",
                  // "origin": {
                  //     "name": "Earth (C-137)",
                  //     "url": "https://rickandmortyapi.com/api/location/1"
                  // },
                  // "location": {
                  //     "name": "Citadel of Ricks",
                  //     "url": "https://rickandmortyapi.com/api/location/3"
                  // },
                  // "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                );
              })
            }
          </MainModal>
        )
      }
      
    </>
  );
}

export default App;
