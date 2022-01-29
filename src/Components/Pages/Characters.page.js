//React
import React,{useState} from 'react';
//Apollo
import { useQuery} from "@apollo/client";
//Query
import { GET_CHARACTERS } from '../../GraphQL/queries';
//Features
import { Search } from '../../Features/Search';
import { Filters } from '../../Features/Filter/Filters';
import { Pagination } from '../../Features/Pagination';
//Utils
import { Spinner } from '../Utils/Spinner';
//Components
import { CharactersList } from '../Characters/CharactersList';
import { Navigate } from 'react-router-dom';

export const CharactersPage = () => {
  //Default values for filtering
  const statusOptions=["All", "Alive","unknown","Dead"];
  const speciesOptions=["All", "Alien","Human","Humanoid","Mythical Creature","Poopybutthole"];
  const genderOptions=["All", "Male","Female","Genderless"];

  //State
  const [searchInput, setSearchInput] = useState(""); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState({status:"", species:"", gender:"",name:""});
  const [page, setPage] =useState(1);
  
  //Data
  const { data, loading, error} = useQuery(GET_CHARACTERS,{
    variables: { page, filter:{...filterQuery, name:searchQuery}},
  });

    if (loading) {
      return <Spinner/>;
    }
  
    if (error) {
      return <Navigate to="/error"/> ;
    }
    //Set search input to what the user is typing
    const handleSearch=(event)=>setSearchInput(event.target.value);

    //Update the search query
    const handleSubmit=(event)=>{
      event.preventDefault();
      setSearchQuery(searchInput.toLowerCase().trim());
    };

    //Set filters based on what the user checks
    const handleChange=(event)=>{
      const filterKey = event.target.name;
      const filterValue = event.target.value;
      setFilterQuery({...filterQuery, [filterKey]:filterValue==="All"?"":filterValue})
    }

    //Character results from the query
    const {characters:{results}} = data;
    
    //Map all values from the possible filters corresponding to the filter keys
    let filterKeysAndValues={status:statusOptions, species:speciesOptions, gender:genderOptions};
  
    //Pagination info
    const {info:{pages, next, prev}} = data.characters;
    
    //Handle page change
    const handlePage=(pageNum)=>{
      setPage(pageNum);
      window.scrollTo(0,0);
    }
  return (
      <>
      <Search handleSearch={handleSearch} handleSubmit={handleSubmit} value={searchInput}/>
      <Filters handleChange={handleChange} initialFilters={filterKeysAndValues} filterQuery={filterQuery}/>
      <CharactersList characters={results}/>
      <Pagination handlePage={handlePage} prev={prev} next={next} pages={pages} page={page}/>
      </>
  );
};

