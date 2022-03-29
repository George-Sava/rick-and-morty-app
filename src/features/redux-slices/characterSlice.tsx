import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';
import {
    BASE_URL
} from '../utils';

import {
    CharacterList
} from '../models'


export const getCharacterList = createAsyncThunk('character/getCharacterList', async () =>{
    return fetch(`${BASE_URL}/character`).then((res) => res.json()) 
});

export const getCharacterFilteredList = createAsyncThunk('character/getCharacterFilteredList', async (url:string) =>{
    return fetch(url).then((res) => res.json())
});

export const getPage = createAsyncThunk('character/getPage', async (url: string | null, {getState: RootState}) =>{
    return fetch(`${url}`).then((res) => res.json()) 
});


type SliceState = {
    characterList: CharacterList;
    status: string| null;
    currentPage: number;
    lastUrlQuery: string;
    search: string;
    searched: boolean;
    lastPageNumber: number;
} 

const initialState: SliceState = {
    characterList:{
        info: {
            count: 0,
            pages: 1,
            next: null,
            prev: null,
        },
        results: []
    },
    status: null,
    currentPage:1,
    lastUrlQuery: '',
    search: '',
    searched: false,
    lastPageNumber: 0
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        incrementPageNumber: (state) => {
            return {
                ...state,
                lastPageNumber: state.currentPage,
                currentPage: state.currentPage + 1
            }
        },
        decrementPageNumber: (state) => {
            return {
                ...state,
                lastPageNumber: state.currentPage,
                currentPage: state.currentPage - 1
            }
        },
        resetPageNumber: (state) => {
            return {
                ...state,
                lastPageNumber: 0,
                currentPage: 1
            }
        },
        setLastUrlQuery: (state, {payload}) => {
            return {
                ...state,
                lastUrlQuery : payload
            }
        },
        setSearch: (state, {payload}) => {
            return {
                ...state,
                search : payload
            }
        },
        resetSearch: (state) => {
            return {
                ...state,
                search : ''
            }
        },
        setSearched: (state, {payload}) => {
            return {
                ...state,
                searched: payload 
            }
        },
        
    },
    extraReducers: (builder)=>{
        builder.addCase(getCharacterList.pending,(state)=>{
            return {
                ...state,
                status: 'loading'
            }
        });
        builder.addCase(getCharacterList.fulfilled,(state, {payload})=>{
            return {
                ...state,
                characterList: payload,
                status: 'success'
            }
        });
        builder.addCase(getCharacterList.rejected,(state)=>{
            return {
                ...state,
                status: 'failed'
            }
        });
        builder.addCase(getCharacterFilteredList.pending,(state)=>{
            return {
                ...state,
                status: 'loading',
                characterList:
                {
                    ...state.characterList,
                    info: {
                        ...state.characterList.info,
                        count: 0,
                        pages: 0
                    }
                }
            }
        });
        builder.addCase(getCharacterFilteredList.fulfilled,(state, {payload})=>{
            const prevPageNumber = state.characterList?.info?.pages;
            const currentPageNumber = payload.info?.pages;

            if(prevPageNumber && currentPageNumber && currentPageNumber < prevPageNumber )
            {
                return {
                    ...state,
                    characterList: payload,
                    status: 'success',
                    currentPage: 1,
                    lastPageNumber: state.currentPage
                }
            }

            return {
                ...state,
                characterList: payload,
                status: 'success',
                currentPage: 1,
                lastPageNumber: state.currentPage
            }
        });
        builder.addCase(getCharacterFilteredList.rejected,(state)=>{
            return {
                ...state,
                status: 'failed',
                currentPage: 0,
                characterList: {
                    ...state.characterList,
                    info:{
                        ...state.characterList.info,
                        pages: 0
                    }
                }
            }
        });
        builder.addCase(getPage.pending,(state)=>{
            return {
                ...state,
                status: 'loading'
            }
        });
        builder.addCase(getPage.fulfilled,(state, {payload})=>{
            return {
                ...state,
                characterList: payload,
                status: 'success'
            }
        });
        builder.addCase(getPage.rejected,(state)=>{
            return {
                ...state,
                status: 'failed'
            }
        });
    }
})

export const {incrementPageNumber, decrementPageNumber, resetPageNumber, setLastUrlQuery,setSearch, setSearched, resetSearch} = characterSlice.actions;

export default characterSlice.reducer;
