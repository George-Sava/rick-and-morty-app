import { createSlice } from '@reduxjs/toolkit';
import {
    OptionList
} from '../models'

type SliceState = {
    isListOpen: boolean;
    optionList: OptionList;
}

const initialState: SliceState = {
    isListOpen: false,
    optionList : {
        status: {
            alive: false,
            dead: false,
            unknown: false
        },
        gender: {
            female: false,
            male: false,
            genderless : false,
            unknown: false
        },
        name: true,
        species: false,
        type: false
    }
}

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        toggleList: (state) =>{ 
            return {
                ...state, 
                isListOpen : !state.isListOpen
            }
        },
        selectStatusAlive: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        dead: false,
                        alive: !state.optionList.status.alive,
                        unknown: false
                    },
                    gender: {
                        female: false,
                        male: false,
                        genderless: false,
                        unknown: false
                    }
                }
            }
        },
        selectStatusDead: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: !state.optionList.status.dead,
                        unknown: false
                    },
                    gender: {
                        female: false,
                        male: false,
                        genderless: false,
                        unknown: false
                    }
                }
            }
        },
        selectStatusUnknown: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: false,
                        unknown: !state.optionList.status.unknown
                    },
                    gender: {
                        female: false,
                        male: false,
                        genderless: false,
                        unknown: false
                    }
                }
            }
        },
        selectGenderFemale: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: false,
                        unknown: false
                    },
                    gender: {
                        female: !state.optionList.gender.female,
                        male: false,
                        genderless: false,
                        unknown: false
                    }
                }
            }
        },
        selectGenderMale: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: false,
                        unknown: false
                    },
                    gender: {
                        female: false,
                        male: !state.optionList.gender.male,
                        genderless: false,
                        unknown: false
                    }
                }
            }
        },
        selectGenderGenderless: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: false,
                        unknown: false
                    },
                    gender: {
                        female: false,
                        male: false,
                        genderless: !state.optionList.gender.genderless,
                        unknown: false
                    }
                }
            }
        },
        selectGenderUnknown: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    status: {
                        alive: false,
                        dead: false,
                        unknown: false
                    },
                    gender: {
                        female: false,
                        male: false,
                        genderless: false,
                        unknown: !state.optionList.gender.unknown
                    }
                }
            }
        },
        selectName: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    name: true,
                    species: false,
                    type: false
                }
            }
        },
        selectSpecies: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    species: true,
                    name: false,
                    type: false
                }
            }
        },
        selectType: (state) => {
            return {
                ...state,
                optionList: {
                    ...state.optionList,
                    type: true,
                    name: false,
                    species: false
                }
            }
        }
    }
})

export const { 
    toggleList, 
    selectStatusAlive, 
    selectStatusDead,
    selectStatusUnknown,
    selectGenderFemale,
    selectGenderMale,  
    selectGenderGenderless,
    selectGenderUnknown,
    selectName,
    selectSpecies,
    selectType
} = dropdownSlice.actions;


export default dropdownSlice.reducer;