import React from "react";

//components


//containers
import Header from "./containers/Header/Header";
import Nav from "./containers/Header/Nav/Nav";


function App() {
  return (
    <>
      <Header>
        <Nav color="white">
            <a href="./">Inicio</a>
            <a href="./">Contacto</a>
        </Nav>
      </Header>
    </>
  );
}

export default App;
