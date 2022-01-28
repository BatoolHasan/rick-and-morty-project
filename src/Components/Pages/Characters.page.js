import React,{useState} from 'react';
import { useQuery} from "@apollo/client";
import { GET_CHARACTERS } from '../../GraphQL/queries';
import { CharactersList } from '../Characters/CharactersList';
import { Spinner } from '../Utils/Spinner';
import { Search } from '../../Features/Search';
import { Filters } from '../../Features/Filter/Filters';
export const CharactersPage = () => {
  const intitialFilters = {status:[]};
    const { data, loading, error } = useQuery(GET_CHARACTERS);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterQuery, setFilterQuery] = useState(intitialFilters);
    const handleSearch=(event)=>setSearchQuery(event.target.value);
    if (loading) {
      return ( <Spinner/>);
    }
  
    if (error) {
      return <div>{error}</div>;
    }
    const handleChange=(event)=>{
      const filterChecked = event.target.checked;
      const filterKey = event.target.name;
      const filterValue = event.target.value;
      const prevValues = filterQuery[filterKey];
      const newValues = filterChecked?[...prevValues, filterValue]:[...prevValues].filter(f=>f!=filterValue);
      setFilterQuery({...filterQuery, [filterKey]:newValues})
    }
    const ifMatchesFilter=(result)=>{
      const filterKeys = Object.keys(filterQuery);
      return filterKeys.filter(f=>{
        return filterQuery[f].length==0?true:filterQuery[f].includes(result[f])}).length>0;
    }
    const {results} = data.characters;
    const statusValues = [...new Set(results.map((result)=>result.status))];
    // setFilterQuery({...filterQuery, status:statusValues});
    const filteredResults = results.filter((result)=>result.name.toLowerCase().includes(searchQuery.toLowerCase()) && ifMatchesFilter(result));
  return (
      <>
      <Search handleSearch={handleSearch}/>
      <Filters handleChange={handleChange} filterValues={statusValues}/>
      <CharactersList characters={filteredResults}/>
      </>
  );
};

