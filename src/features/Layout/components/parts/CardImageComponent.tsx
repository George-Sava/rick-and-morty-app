import React from 'react';

interface Props 
{
    className?: string;
    image: string;
    name: string;
}


const CardImageComponent = ({className, image, name}:Props) =>
{
    return <img src={image} alt={`Image of ${name}`} className={className}/>
}

export default CardImageComponent;