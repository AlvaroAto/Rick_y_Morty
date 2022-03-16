import React, { useState,useEffect } from "react";

//assets
import background from './assets/img/space.jpg';

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
      <Main style={{ 
        backgroundImage: `URL(${ background })`,
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
      }}>
          
          <CharacterList>
              {
                characterList.map((character, index) => {
                  return (
                    <CharacterItem 
                      key={index} 
                      name={character.name}
                      image={character.image}
                      handleClick={() => handleCharacter(character.url)}
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
