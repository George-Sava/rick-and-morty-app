import React from 'react';
import FontAwesome from 'react-fontawesome';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { DropdownText } from '../../../appStyles';
import {toggleList} from '../../../redux-slices/dropdownSlice';


interface Props {
    className?: string;
    title: string;

}

const DropdownHeaderComponent = ({className, title}: Props) => 
{
    const isListOpen = useAppSelector( state => state.dropdown.isListOpen);
    const dispatch = useAppDispatch();

    return (
        <button className={className} onClick={()=> dispatch(toggleList())}>
            <DropdownText >{ title }</DropdownText> 
            {
                isListOpen 
                    ? <FontAwesome name="angle-up" />
                    : <FontAwesome name="angle-down" />
            }
        </button>
    )
}

export default DropdownHeaderComponent;