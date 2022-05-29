import React from "react";

import GlobalStyle from './globalStyle';

//pages
import Contact from './pages/Contact';
import Home from './pages/home';
import Characters from './pages/Character/index';
import CharacterDetail from './pages/Character/name';
import NotFoundPage from "./pages/NotFound";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App(){

  return(
    <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;