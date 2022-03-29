import React from 'react';

interface Props{
    className?: string;
    color?: string;
}

const BoxComponent:React.FC <Props>= ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default BoxComponent;