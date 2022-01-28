import React from 'react';
import {Logo} from '../Logo';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className='d-flex justify-content-center align-items-center'>
        <Link to="/">
            <Logo/>
        </Link>
    </header>
    );
};

