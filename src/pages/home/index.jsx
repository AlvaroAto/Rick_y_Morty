import React, { useState, useEffect, useSearchParams } from "react";

//assets

//components

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import CharacterList from "../../containers/CharactersList/CharactersList";
import CharacterItem from "../../containers/CharacterItem/CharacterItem";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";
import Search from "../../containers/Search/Search";
import MainModal from "../../containers/MainModal/MainModal";
import PageNavegation from "../../containers/PageNavegation/PageNavegation";

//hooks
import { useModal } from "../../hooks/use-modal";
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';


function Home() {

  const { handleModal, modalOpened } = useModal();

  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  // const [search,setSearch] = useState('?name=');
  const [searchParams,setSearchParams] = useSearchParams();

  const paramsString = '?name=searchParams&gender='; 
  const searchParams = new URLSearchParams(paramsString);

  const characterService = useCharacters();
  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const result = await characters.data;
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

  const handleFilter = (e) => {
    // setSearch(search+'&'+e.target.name+'='+e.target.value);
    // console.log(search+'&'+e.target.name+'='+e.target.value);

  }

  const handleSearch = (e) =>{
    e.preventDefault();
    // setSearch('?name='+e.target.value);
  }

  return (
    <Main>      
      <Header />
      <Main>
        <Search
          onSubmit={handleSearch}
        >
          <>
            <input 
            type="text" 
            name="search" 
            placeholder="Search name" 
            value={search}
            onChange={(e)=>handleSearch(e)}
            />
            <div className="filter">
              <label className="title">Gender</label>
              <div className="options">
                <div className="row">
                  <input 
                  type="radio" 
                  id="male"
                  name="gender" 
                  value="Male" 
                  onChange={(e)=>handleFilter(e)}
                  />
                  <label for="male">male</label>
                  <input 
                  type="radio" 
                  id="female"
                  name="gender" 
                  value="Female" 
                  onChange={(e)=>handleFilter(e)}
                  />
                  <label for="female">female</label>
                </div>
                <div className="row">
                  <input 
                  type="radio" 
                  id="genderless"
                  name="gender" 
                  value="Genderless" 
                  onChange={(e)=>handleFilter(e)}
                  />
                  <label for="genderless">genderless</label>
                  <input 
                  type="radio" 
                  id="unknown"
                  name="gender" 
                  value="Unknown" 
                  onChange={(e)=>handleFilter(e)}
                  />
                  <label for="unknown">unknown</label>
                </div>
              </div>
            </div>            
          </>
        </Search>
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
