import React from 'react';
import { useQuery} from "@apollo/client";
import { CHARACTERS } from '../../GraphQL/queries';
import { CharactersList } from '../Characters/CharactersList';
import { Spinner } from 'react-bootstrap';
export const CharactersPage = () => {
    const { data, loading, error } = useQuery(CHARACTERS);

    if (loading) {
      return (
      <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>);
    }
  
    if (error) {
      return <div>{error}</div>;
    }
    const {results} = data.characters;

  return (
      <CharactersList data={results}/>
  );
};

