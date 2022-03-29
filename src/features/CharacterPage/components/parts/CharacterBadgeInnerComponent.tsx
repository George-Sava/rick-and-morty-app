import React from 'react';

interface Props{
    className?: string;
    bgcolor?: string;
    iconColor?: string;
}

const CharacterBadgeInnerComponent:React.FC <Props>= ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default CharacterBadgeInnerComponent;