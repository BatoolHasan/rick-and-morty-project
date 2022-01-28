//React
import React,{useState} from 'react';
//Apollo
import { useQuery} from "@apollo/client";
//Query
import { GET_CHARACTERS } from '../../GraphQL/queries';
//Components
import { CharactersList } from '../Characters/CharactersList';
import { Spinner } from '../Utils/Spinner';
import { Search } from '../../Features/Search';
import { Filters } from '../../Features/Filter/Filters';
import { ErrorPage } from './Error.page';

export const CharactersPage = () => {
  const defaultFilters = {status:[], species:[], gender:[]};
  //State
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState(defaultFilters);
  
    if (loading) {
      return <Spinner/>;
    }
  
    if (error) {
      return <ErrorPage error={error}/> ;
    }
    //Set search query to what the user is typing
    const handleSearch=(event)=>setSearchQuery(event.target.value);

    //Set filters based on what the user checks
    const handleChange=(event)=>{
      const filterChecked = event.target.checked;
      const filterKey = event.target.name;
      const filterValue = event.target.value;
      const prevFilters = filterQuery[filterKey];
      const newFilters = filterChecked?[...prevFilters, filterValue]:[...prevFilters].filter(f=>f!==filterValue);
      setFilterQuery({...filterQuery, [filterKey]:newFilters})
    }

    //Check if the character matches the filter
    const doesMatchFilter=(result)=>{
      const filterKeys = Object.keys(filterQuery);
      let matches = [];
      filterKeys.forEach(f=>{
        matches.push(filterQuery[f].length===0?true:filterQuery[f].includes(result[f]));
      })
        return !matches.includes(false);
    }

    //results from the query
    const {results} = data.characters;

    //Filtered results to be passed to the characters list
    const filteredResults = results.filter((result)=>result.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) && doesMatchFilter(result));
    
    //Map all values from the data corresponding to the filters
    let filterKeysAndValues={...defaultFilters};
    Object.keys(defaultFilters).forEach(defaultFilter=>{
      //using set to avoid duplicate values
      filterKeysAndValues[defaultFilter]=[...new Set(results.map((result)=>result[defaultFilter]))]}
    )
  return (
      <>
      <Search handleSearch={handleSearch}/>
      <Filters handleChange={handleChange} initialFilters={filterKeysAndValues}/>
      <CharactersList characters={filteredResults}/>
      </>
  );
};

