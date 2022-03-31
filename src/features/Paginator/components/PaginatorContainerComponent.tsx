import React from 'react';
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
    getPage,
    incrementPageNumber,
    decrementPageNumber,
    setLastUrlQuery
} from "../../redux-slices/characterSlice";
import {
    PaginatorButton,
    PaginatorText
} from '../../appStyles';


interface Props {
    className: string;
}

const PaginatorContainerComponent = ({className}:Props) => 
{
    
    const dispatch = useAppDispatch();
    const pages = useAppSelector(state => state.character.characterList?.info?.pages);
    const nextPage = useAppSelector(state => state.character.characterList?.info?.next);
    const prevPage = useAppSelector(state => state.character.characterList?.info?.prev);
    const pageNumber = useAppSelector(state => state.character.currentPage);

    const handleButtonPress = (url: string | null, action: string) =>
    {
        if(url && action === 'next') 
        {
            dispatch(getPage(nextPage));
            dispatch(incrementPageNumber());
            dispatch(setLastUrlQuery(nextPage));
        }
        if(url && action === 'prev') 
        {
            dispatch(getPage(prevPage));
            dispatch(decrementPageNumber());
            dispatch(setLastUrlQuery(prevPage));
        }
    }

    return(
        <div className={className}>
            <PaginatorButton onClick={()=>handleButtonPress(prevPage, 'prev')}>Prev</PaginatorButton>
            <PaginatorText>Pages: {pages} </PaginatorText>
            <PaginatorText> Current Page: {pageNumber} </PaginatorText>
            <PaginatorButton onClick={()=>handleButtonPress(nextPage, 'next')}>Next</PaginatorButton>
        </div>
    )
}

export default PaginatorContainerComponent;