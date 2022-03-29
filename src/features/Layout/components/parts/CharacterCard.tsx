import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCircleCheck,
    faCircleXmark,
    faCircleQuestion 
} from "@fortawesome/free-solid-svg-icons";
import {
    Li,
    CardTextHolder,
    CardTextTitle,
    CardTextType,
    CardTextStatus,
    IconContainer,
    CardTextStatusTitle,
    CardTextStatusContent,
    CardImageContainer,
    CardImage
} from '../../../appStyles';

interface Props {
    species: string;
    name: string;
    id: number;
    image: string;
    className?: string;
    status: string;
}

const CharacterCardComponent = ({species, name, id, image, className, status}:Props) => 
{
    return (
        <Link 
          to={`/character/${id}`}
          className={className}
        >
                <Li>
                    <CardImageContainer>
                        <CardImage image={image} name={name}/>
                    </CardImageContainer>
                    <CardTextHolder>
                        <CardTextTitle>{name}</CardTextTitle>
                        <CardTextType>

                            {species} {' '} {species === 'Alien' ? '👽': '🧑'}
                        </CardTextType>
                        <CardTextStatus>
                            <CardTextStatusTitle>
                                <div>
                                    Status
                                </div>
                            </CardTextStatusTitle> 
                            <CardTextStatusContent>
                                <span>{status}</span>
                                <IconContainer> 
                                { 
                                    status === "Alive" ? 
                                        <FontAwesomeIcon icon={faCircleCheck} size="xs"/>:
                                        status === "Dead" ? 
                                            <FontAwesomeIcon icon={faCircleXmark} />:
                                            <FontAwesomeIcon icon={faCircleQuestion} />  
                                }
                                </IconContainer>
                            </CardTextStatusContent>
                        </CardTextStatus>
                    </CardTextHolder>  
                </Li>
        </Link>
    )
}

export default CharacterCardComponent;