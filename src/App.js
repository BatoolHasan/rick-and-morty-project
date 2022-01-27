import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import { client } from "./ApolloClient/client";
import {BrowserRouter} from 'react-router-dom';
import { Main } from './Components/Main';
function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;
