//React
import React from 'react';
//Bootstrap
import { Card, Badge, Table} from 'react-bootstrap';
//Utils
import {LazyImage} from '../Utils/LazyImage';
import { getStatusBadgeStyle } from '../../Utils/Characters/utils';

export const CharacterDetailsCard = ({ 
    details:{
    name, status, 
    species, gender, 
    origin:{name:originName}, location:{name:locationName}, 
    image, episode, 
    created}
    }) => {

    const statusBadgeStyle = getStatusBadgeStyle(status);

    return (
        <Card className="m-auto" style={{maxWidth:"50rem"}}>
            <Card.Header className="text-center"><h1>{name}</h1></Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-md-6 mb-2 mb-md-0"> <LazyImage src={image} alt={name}/></div>
                    <div className="col-md-6">
                        <div className="row mb-0 mb-md-4">
                            <div className='col-md-6 mb-4 mb-md-0'><h4><Badge bg={statusBadgeStyle} className='w-100'>{status}</Badge></h4></div>
                            <div className='col-md-6 mb-4 mb-md-0'><strong>Species: </strong>{species}</div>
                        </div>
                        <div className="row mb-0 mb-md-4">
                            <div className='col-md-6 mb-4 mb-md-0'><strong>Gender: </strong>{gender}</div>
                            <div className='col-md-6 mb-4 mb-md-0'><strong>Origin: </strong>{originName}</div>
                        </div>
                        <p><strong>Last known location: </strong>{locationName}</p>
                    </div>
                </div>
                <div className='row p-2 mt-2'>
                    <hr/>
                    <p><strong>Appeard in:</strong></p>
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Air Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {episode.map(e=>{
                                return (<tr key={e.id}>
                                    <td key={`name-${e.id}`}>{e.name}</td>
                                    <td key={`air-date-${e.id}`}>{e.air_date}</td>
                                    </tr>);
                                }
                            )}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted text-center">Created on: {new Date(created).toDateString()}</Card.Footer>
        </Card>
    );
};
