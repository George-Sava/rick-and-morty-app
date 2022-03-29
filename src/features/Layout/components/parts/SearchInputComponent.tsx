import React, { useEffect, useState } from 'react';
import { debounce } from "lodash";
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { getCharacterFilteredList, setLastUrlQuery, setSearch, setSearched } from '../../../redux-slices/characterSlice';
import {
    generateUrl
} from '../../../utils';

interface Props{
    className: string;
    placeholder: string;
}

const SearchInputComponent = ({className, placeholder}: Props) =>
{
    const dispatch = useAppDispatch();
    const optionList = useAppSelector(state => state.dropdown.optionList);
    const lastQuery = useAppSelector(state => state.character.search);
    const searched = useAppSelector(state => state.character.searched)
    const [query, setQuery] = useState('');

    const getData = async (query: string) =>
    {   
        
    }

    const debouncedSearch = debounce(async (query) => {
        const url = generateUrl(query,optionList);
        dispatch(setSearch(query));
        dispatch(setSearched(true));
        dispatch(getCharacterFilteredList(url));
        dispatch(setLastUrlQuery(url));
      }, 300);

    useEffect(() =>{
        
        if(query !== '')
        {
            debouncedSearch(query);
            
            return () => {
                debouncedSearch.cancel();
            }
        }
        
    })

    return (
        <input type="search"  onChange={(e) => setQuery(e.target.value)} className={className} placeholder={placeholder} />
    )
}

export default SearchInputComponent;