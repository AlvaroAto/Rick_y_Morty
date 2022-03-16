import React, { useState,useEffect } from "react";

//assets
import background from './assets/img/space.jpg';

//components


//containers
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import CharacterList from "./containers/CharactersList/CharactersList";

//hooks
import { useCharacters } from './services/rickandmorty/rickandmorty-services';


function App() {

  const [characterList, setCharacterList] = useState([]);

  const characterService = useCharacters();
  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacter();
      const { results } = await characters.data;

      setCharacterList();
    }
    getCharacterList();
  },[])

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
                    <li key={index}>

                    </li>
                  )
                })
              }
          </CharacterList>
      </Main>

      
    </>
  );
}

export default App;
