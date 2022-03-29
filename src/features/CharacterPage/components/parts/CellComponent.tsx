import React from 'react';

interface Props{
    className?: string;
    borderColor?: string;
    border?: boolean;
}

const CellComponent:React.FC <Props>= ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default CellComponent;