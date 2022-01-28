import React from 'react';
import { GET_CHARACTER } from '../../GraphQL/queries';
import {Spinner} from "../Utils/Spinner";
import {LazyImage} from "../Utils/LazyImage";
import { Card, Badge} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams, Navigate} from 'react-router-dom';
import { getStatusBadgeStyle } from '../../Utils/Characters/utils';

export const CharacterDetails = () => {
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
    const {name, status, species, gender, origin:{name : originName}, location:{name : locationName}, image, episode, created} = data.character;
    const statusBadgeStyle = getStatusBadgeStyle(status);
  return (

    <Card className="character-details m-auto">
        <Card.Header className="text-center"><h1>{name}</h1></Card.Header>
        <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <LazyImage src={image} alt={name}/>
              </div>
              <div className="col-md-6">
                  <div className="row mb-4">
                    <div className='col-md-6'><strong>Species: </strong>{species}</div>
                    <div className='col-md-6'><h4><Badge bg={statusBadgeStyle}>{status}</Badge></h4></div>
                  </div>
                  <div className="row mb-4">
                    <div className='col-md-6'><strong>Gender: </strong>{gender}</div>
                    <div className='col-md-6'><strong>Origin: </strong>{originName}</div>
                  </div>
                  <p><strong>Last known location: </strong>{locationName}</p>

              </div>
            </div>
            <div className='row mt-4'>
            <hr/>
                  <p><strong>Appeard in:</strong></p>
                  <ul className="list-unstyled">
                    {episode.map(e=><li key={e.id}>{e.name}</li>)}
                  </ul>
            </div>
        </Card.Body>
        <Card.Footer className="text-muted text-center">Created on: {new Date(created).toDateString()}</Card.Footer>
    </Card>
  );
};

