import React from 'react';
import { OptionList } from '../../../models';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { getPage, getCharacterList, resetPageNumber, resetSearch} from '../../../redux-slices/characterSlice';
import {
    selectStatusAlive, 
    selectStatusDead,
    selectStatusUnknown,
    selectGenderFemale,
    selectGenderMale,  
    selectGenderGenderless,
    selectGenderUnknown,
    selectName,
    selectSpecies,
    selectType,
} from '../../../redux-slices/dropdownSlice';
import { 
    DropdownTitle,
    DropdownBox,
    DropdownBoxItem,
    ResetButton
} from '../../../appStyles';
import { generateUrl } from '../../../utils';


interface Props {
    className?: string;
}

const DropdownListComponent = ({className}: Props) =>
{
    const list: OptionList = useAppSelector( state => state.dropdown.optionList);
    const dispatch = useAppDispatch();
    const optionList = useAppSelector(state => state.dropdown.optionList);
    const search = useAppSelector(state => state.character.search);

    const handleInputChange = (action: string) =>
    {
        const url = generateUrl(search,optionList);
        switch(action) 
        {
            case 'alive':
                dispatch(selectStatusAlive()); 
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'dead':
                dispatch(selectStatusDead());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'sUnknown':
                dispatch(selectStatusUnknown())
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'female':
                dispatch(selectGenderFemale());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'male':
                dispatch(selectGenderMale());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'genderless':
                dispatch(selectGenderGenderless());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'gUnknown':
                dispatch(selectGenderUnknown());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'name':
                dispatch(selectName());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'species':
                dispatch(selectSpecies());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
            case 'type':
                dispatch(selectType());
                dispatch(getPage(url));
                dispatch(resetPageNumber());
                break;
        }
    }

    const handleReset = () => 
    {
        dispatch(getCharacterList());
        dispatch(resetPageNumber());
        // dispatch(resetSearch());
    }

    return (
        <div className={className}>
            <DropdownBox>
                <ResetButton onClick={()=> handleReset()}>Reset</ResetButton>
                <DropdownTitle >Status</DropdownTitle>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('alive')} name="status-alive" type="checkbox"  checked={list.status.alive}/>
                    <label>Alive</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() =>  handleInputChange('dead')} name="status-dead" type="checkbox" checked={list.status.dead}/>
                    <label>Dead</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() =>  handleInputChange('sUnknown')} name="status-unknown" type="checkbox" checked={list.status.unknown}/>
                    <label>Unknown</label>
                </DropdownBoxItem>
            </DropdownBox>
            <DropdownBox>
                <DropdownTitle>Gender</DropdownTitle>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('female') } name="species-female" type="checkbox" checked={list.gender.female}/>
                    <label>Female</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('male') } name="species-male" type="checkbox" checked={list.gender.male}/>
                    <label>Male</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('genderless')} name="species-genderless" type="checkbox"  checked={list.gender.genderless}/>
                    <label>Genderless</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('gUnknown') } name="species-unknown" type="checkbox" checked={list.gender.unknown}/>
                    <label>Unknown</label>
                </DropdownBoxItem>
            </DropdownBox>
            <DropdownBox>
                <DropdownTitle>Search By</DropdownTitle>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('name') } name="name" type="checkbox"  checked={list.name}/>
                    <label>Name</label>
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('species') } name="species" type="checkbox" checked={list.species}/>
                    <label>Species</label> 
                </DropdownBoxItem>
                <DropdownBoxItem>
                    <input onChange={() => handleInputChange('type') } name="type" type="checkbox" checked={list.type}/>
                    <label>Type</label>
                </DropdownBoxItem>
            </DropdownBox>
        </div>
    )
}

export default DropdownListComponent;