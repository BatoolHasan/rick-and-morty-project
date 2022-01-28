import React, {useState} from 'react';
import { CharacterCard } from './CharacterCard';
export const CharactersList = ({characters}) => {
  return (
    <div className='d-flex flex-wrap gap-4 justify-content-center align-items-center'>
      {characters.map(character=><CharacterCard details={character} key={character.id}/>)}
    </div>
  );
};

