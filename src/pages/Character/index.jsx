import React, { useState, useEffect } from "react";

//styled-components
import IndexContainer from "../../pages/home/home-style";

//assets
import loadGif from '../../assets/img/loading-portal.gif';

//components
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import GoToTop from "../../components/Buttons/GoToTop/GoToTop";

//containers
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import CharacterList from "../../containers/CharactersList/CharactersList";
import CharacterItem from "../../containers/CharacterItem/CharacterItem";
import ModalContent from "../../containers/MainModal/ModalContent/ModalContent";
import Title from "../../components/Title/Title";
import Footer from "../../containers/Footer/Footer";
import PageNavegation from "../../containers/PageNavegation/PageNavegation";

//hooks
import { useModal } from "../../hooks/use-modal";
import { useCharacters } from '../../services/rickandmorty/rickandmorty-services';
import MainModal from "../../containers/MainModal/MainModal";

//pagination
import { Link } from 'react-router-dom';

function Characters() {

  const { handleModal, modalOpened } = useModal();

  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [error, setError] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);

  const characterService = useCharacters();
  useEffect(() => {
    const getCharacterList = async () => {
      try{
        const characters = await characterService.getCharacters();
        const result = await characters.data;      
        setCharacterList(result);
      }catch(error){
        setError("Error "+error);
      }
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
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setShowTopBtn(true);
      }else{
        setShowTopBtn(false);
      }
    });
  },[]);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <Main>      
      <Header />
      <Main>        
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
        <Title title="Rick and Morty" subtitle="details from each character"></Title>
        {
                characterService.loading && <div id="loading"><img src={loadGif} alt="cargando..."/></div>            
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
                      sheet={`Ficha n??: `+character.id+` Ficha completa de `+character.name+` pulsando en [Ver m??s].`}
                      image={character.image}
                      vertical={character.species+` `+character.status}
                      handleClick={() => handleCharacter(character.url)}
                    >
                        <Link to={`/characters/${character.id}`}>detalles</Link> 
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
      {
        showTopBtn && <GoToTop
          color="rgba(0,104,107,.6)"
          onClick={()=>goToTop()}
        />          
      }
      <Footer>
        <FooterLogo />
      </Footer>
    </Main>
  );
}

export default Characters;
