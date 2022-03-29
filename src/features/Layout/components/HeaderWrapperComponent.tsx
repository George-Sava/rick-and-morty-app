import React from 'react';

interface Props {
    className: string;
    children:  React.FC<{}>
}

const Header = ({className, children}: Props) =>
{ 
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Header;