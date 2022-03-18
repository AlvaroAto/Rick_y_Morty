import React, { useState,useEffect } from "react";

//assets

//components
import CharacterItem from "./containers/CharacterItem/CharacterItem";

//containers
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import CharacterList from "./containers/CharactersList/CharactersList";

//hooks
import { useCharacters } from './services/rickandmorty/rickandmorty-services';


function App() {

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
                      sheet={`Para ver la ficha completa de `+character.name+` pulse en ver mas`}
                      image={character.image}
                      handleClick={() => handleCharacter(character.url)}
                      buttonText="ver más"
                    />
                  )
                })
              }
          </CharacterList>
      </Main>

      
    </>
  );
}

export default App;
