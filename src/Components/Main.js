import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Header } from './Layout/Header';
import { CharactersPage } from './Pages/Characters.page';
import { CharacterDetails } from './Characters/CharacterDetails';
export const Main = () => {
  return (
      <>
      <Header/>
      <div className='p-2'>
        <Routes>
            <Route path="/" element={<CharactersPage />}/>
            <Route path="/:id" element={<CharacterDetails />}/>
        </Routes>
      </div>
    </>
  );
};
