import React from "react";

import {
    PaginatorContainer,
} from '../../appStyles';

interface Props {
    className: string;
}

const PaginatorWrapperComponent = ({className}: Props) => 
{
    

    return (
        <div className={className}>
            <PaginatorContainer />
        </div>
    )
}

export default PaginatorWrapperComponent;