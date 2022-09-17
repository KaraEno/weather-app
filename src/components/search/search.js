import React from 'react';
import { useState } from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions} from '../../api'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)
    
    const handleOnChange = (searchdata) => {
        setSearch(searchdata)
        onSearchChange(searchdata)
    }
    const loadOptions = async (inputvalue) =>{
       try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputvalue}`, geoApiOptions);
            const responseJSON = await response.json();
            return {
                options: responseJSON.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.country}`
                    }
                })
            };
        } catch (err) {
            return console.error(err);
        }

    }
  return (
    <AsyncPaginate 
    placeholder="Enter your city"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    className="search-bar"
    />

  )
}

export default Search