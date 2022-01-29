//styling
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//Apollo
import { ApolloProvider } from '@apollo/client';
import { client } from "./ApolloClient/client";
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Pages
import { Header } from './Components/Layout/Header';
import { CharactersPage } from './Components/Pages/Characters.page';
import { CharacterDetailsPage } from './Components/Pages/CharacterDetails.page';
import { ErrorPage } from './Components/Pages/Error.page';

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Header/>
      <div className='p-2'>
        <Routes>
            <Route path="/" element={<CharactersPage />}/>
            <Route path="/:id" element={<CharacterDetailsPage />}/>
            <Route path="/error" element={<ErrorPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;
