import React, { useState, useEffect } from "react";

//styled-components
import IndexContainer from "./home-style";


//assets
import loadGif from '../../assets/img/loading-portal.gif';

//components
import GoToTop from "../../components/Buttons/GoToTop/GoToTop";
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
  const [showTopBtn, setShowTopBtn] =useState(false);

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
      <>      
      {/* <SearchBarWrapper>
        <SearchBar
        onSubmit={(e) => searchCharacter(e)}
        >
        </SearchBar>
      </SearchBarWrapper> */}
      
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

export default Home;
