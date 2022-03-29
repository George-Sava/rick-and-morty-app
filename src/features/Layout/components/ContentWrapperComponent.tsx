import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {getCharacterList, getPage} from '../../redux-slices/characterSlice';
import {
    CharacterCard,
    Container
} from '../../appStyles';


interface Props{
    className: string;
}

const ContentWrapperComponent = ({className}: Props) =>
{
    const characterList = useAppSelector(state => state.character.characterList.results);
    const lastQuery = useAppSelector(state => state.character.lastUrlQuery);
    const dispatch = useAppDispatch();

    const handleListUpdate = () =>
    {
        if(lastQuery !== '')
        {
            dispatch(getPage(lastQuery))
        }
        else
        {
            dispatch(getCharacterList());
        }  
    }

    useEffect(() =>{
        handleListUpdate()
    },[lastQuery]);

    return (
        <div className={className}>
            <Container>
            {
                characterList &&
                 characterList.map( character => {
                    return (
                        <CharacterCard 
                         key={character.id}
                         status={character.status}
                         species={character.species} 
                         id={character.id} 
                         image={character.image}
                         name={character.name}
                        />)
                })
            }
            </Container>
        </div>
    )
}

export default ContentWrapperComponent;