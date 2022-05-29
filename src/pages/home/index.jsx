import React, { useState, useEffect } from "react";

//styled-components
import IndexContainer from "./home-style";


//assets
import loadGif from '../../assets/img/loading-portal.gif';

//components

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import CharacterList from "../../containers/CharactersList/CharactersList";
import CharacterItem from "../../containers/CharacterItem/CharacterItem";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";
import MainModal from "../../containers/MainModal/MainModal";
import PageNavegation from "../../containers/PageNavegation/PageNavegation";
import Footer from "../../containers/Footer/Footer";

//hooks
import { useModal } from "../../hooks/use-modal";
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import Title from "../../components/Title/Title";
// import SearchBarWrapper from "../../containers/SearchBar/SearchBarWrapper/SearchBarWrapper-style";
// import SearchBar from "../../containers/SearchBar/SearchBar";


function Home() {

  const { handleModal, modalOpened } = useModal();

  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  
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

  const searchCharacter = async (e) => {
    e.preventDefault();
    try{
    const character = await characterService.getCharactersFilter(e.target.name.value, e.target.gender.value, e.target.status.value);
    const result = await character.data;
    setCharacterList(result);
    }catch(error){
      console.log("La busqueda no tiene resultados");
    }
  }

  return (
    <Main>      
      <Header />
      <>      
      {/* <SearchBarWrapper>
        <SearchBar
        onSubmit={(e) => searchCharacter(e)}
        >
        </SearchBar>
      </SearchBarWrapper> */}
      <IndexContainer>      
        <form
          onSubmit={(e) => searchCharacter(e)}
        >
          <input type="text" name="name" placeholder="Search by name"/>    
          <div className="filter">
            <label className="title">Status</label>
            <div className="options">
              <div className="row">
                <input 
                  type="radio" 
                  id="allstatus"
                  name="status" 
                  defaultChecked="checked"
                  value="" 
                  />
                <label htmlFor="all">all</label>
                <input 
                  type="radio" 
                  id="alive"
                  name="status" 
                  value="Alive" 
                />
                <label htmlFor="alive">alive</label>                  
              </div>
              <div className="row">   
                <input 
                  type="radio" 
                  id="dead"
                  name="status" 
                  value="Dead" 
                />
                <label htmlFor="dead">dead</label>               
                <input 
                  type="radio" 
                  id="unknown"
                  name="status" 
                  value="Unknown" 
                />
                <label htmlFor="unknown">unknown</label>                  
                
              </div>
            </div>
          </div>        
          <div className="filter">
            <label className="title">Gender</label>
            <div className="options">
              <div className="row">
                <input 
                  type="radio" 
                  id="allgender"
                  name="gender" 
                  defaultChecked="checked"
                  value="" 
                />
                <label htmlFor="all">all</label>
                <input 
                  type="radio" 
                  id="male"
                  name="gender" 
                  value="Male" 
                />
                <label htmlFor="male">male</label>
                <input 
                  type="radio" 
                  id="female"
                  name="gender" 
                  value="Female" 
                />
                <label htmlFor="female">female</label>
              </div>
              <div className="row">
                <input 
                  type="radio" 
                  id="genderless"
                  name="gender" 
                  value="Genderless" 
                />
                <label htmlFor="genderless">genderless</label>
                <input 
                  type="radio" 
                  id="unknown"
                  name="gender" 
                  value="Unknown" 
                />
                <label htmlFor="unknown">unknown</label>                  
              </div>
            </div>
          </div>
          <input type="submit" value="buscar" id="buscar" />
        </form>
        </IndexContainer>
        {
            characterService.loading && <div id="loading"><img src={loadGif} alt="cargando..."/></div>            
        }
        {
          <Title title="Rick and Morty" subtitle="characters" text="preview"></Title>
        }
        
        {
          characterService.errorMessage !== '' ? (
            <p id="errorSearch">{characterService.errorMessage}</p>
          ) : (
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
          )
        }
          {
            characterList.info && <PageNavegation
              prevUrl={characterList.info.prev}
              nextUrl={characterList.info.next}
              onClick={(url)=>handleCharacterPagination(url)}
            />
          }
          
      </>
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
                species={ selectedCharacter.species }                
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
    <Footer>
      <FooterLogo />
    </Footer>
    </Main>
  );
}

export default Home;
