import React from 'react';
import {
    SearchInput,
    DropdownWrapper
} from "../../appStyles";

interface Props {
    className: string;
}

const SearchWrapperComponent = ({className}: Props) => 
{
    return (
        <div className={className}>
            <DropdownWrapper />
            <SearchInput />
        </div>
    )
}

export default SearchWrapperComponent;