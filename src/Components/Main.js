import {Routes, Route} from 'react-router-dom';
import React from 'react';
import { CharactersPage } from './Pages/Characters.page';
import { Logo } from './Logo';
export const Main = () => {
  return (
      <>
      <Logo/>
    <Routes>
      <Route path="/" element={<CharactersPage />}/>
        {/* <Route path="teams" element={<Teams />}/> */}
    </Routes>
    </>
  );
};
