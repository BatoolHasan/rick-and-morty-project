//React
import React from 'react';
//Query
import { GET_CHARACTER } from '../../GraphQL/queries';
//Apollo
import { useQuery } from '@apollo/client';
//Router
import { useParams, Navigate} from 'react-router-dom';
//Utils
import {Spinner} from "../Utils/Spinner";
//Components
import { CharacterDetailsCard } from '../Characters/CharacterDetailsCard';

export const CharacterDetailsPage = () => {
  //Hooks
  const {id} = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
      variables: { id },
    });

  if (loading) {
    return ( <Spinner/>);
  }

  if (error) {
    return <Navigate to="/"/>;
  }
  return (
    <CharacterDetailsCard details={data.character}/>
  );
};

