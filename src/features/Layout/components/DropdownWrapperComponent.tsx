import React from 'react';
import {
    useAppSelector
} from '../../../app/hooks';
import {
    DropdownHeader,
    DropdownList
} from '../../appStyles';

interface Props {
    className: string;
}

const DropdownWrapperComponent = ({className}: Props) => 
{
    const isListOpen = useAppSelector( state => state.dropdown.isListOpen)

    return (
        <div className={className}>
            <DropdownHeader title="Filter" />
            <div>
            {
                isListOpen && <DropdownList />              
            }
            </div>
        </div>
    )
}

export default DropdownWrapperComponent;