//React
import React from 'react';
//Router
import { Link } from 'react-router-dom';
//Components
import {Logo} from '../Micro/Logo';

export const Header = () => {
  return (
    <header className='d-flex justify-content-center align-items-center'>
        <Link to="/">
            <Logo/>
        </Link>
    </header>
    );
};

