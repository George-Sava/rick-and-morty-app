import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { resetSearch } from '../../redux-slices/characterSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCircleCheck,
    faCircleXmark,
    faCircleQuestion,
    faMars as iconMale,
    faVenus as iconFemale,
    faGenderless as iconGenderless,
    faQuestion as iconUnknown
} from "@fortawesome/free-solid-svg-icons";
import {
    CharacterGridContainer,
    GridHeader,
    CharacterGridContent,
    Row,
    Cell,
    Box,
    DetailBox,
    CharacterTitle,
    CharacterStatus,
    CharacterInnerTitle,
    CharacterBadge,
    CharacterImage,
    CharacterGender,
    CharacterSpecies,
    CharacterType,
    CharacterOrigin,
    CharacterLocation,
    CharacterLocationText,
    CharacterEpisodeList,
    Episode,
    BackgroundImageComponent,
    ImgHeader,
    BackButton
} from '../../appStyles';


const CharacterGridContainerComponent = () =>
{   
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useAppDispatch();
    const characterList = useAppSelector(state => state.character.characterList.results);
    const characterDetails = characterList.find(ch => ch.id === parseInt(params.characterId as string));


    const goBack = () =>
    {
        navigate('/');
        
    }

    return(
        <CharacterGridContainer>
            <BackgroundImageComponent />
            <GridHeader >
                <ImgHeader />
                <BackButton onClick={goBack} >
                    Back
                </BackButton>
            </GridHeader>
            <CharacterGridContent>
                <DetailBox>
                    <Row>
                        <Cell>
                            <CharacterImage src={characterDetails?.image}/>
                        </Cell>
                        <Cell>
                            <Box color="linear-gradient(239deg, rgba(41,30,83,1) 4%, rgba(42,60,97,1) 58%, rgba(4,31,56,1) 92%)">
                                <Row>
                                    <Cell>
                                        <CharacterTitle>
                                        <CharacterInnerTitle>Name</CharacterInnerTitle>
                                            {characterDetails?.name}
                                        </CharacterTitle>
                                    </Cell>
                                    <Cell>
                                        <CharacterStatus>
                                            <CharacterInnerTitle>Status </CharacterInnerTitle>
                                            {/* <span>{characterDetails?.status}</span> */}
                                                {
                                                    characterDetails?.status === 'Alive'?
                                                        <CharacterBadge iconColor="#2abd56">
                                                            <FontAwesomeIcon icon={faCircleCheck}/>
                                                        </CharacterBadge> :
                                                        characterDetails?.status === "Dead" ? 
                                                        <CharacterBadge iconColor="#fc0317">
                                                            <FontAwesomeIcon icon={faCircleXmark}/>
                                                        </CharacterBadge>:
                                                        <CharacterBadge iconColor="#891dbf">
                                                            <FontAwesomeIcon icon={faCircleQuestion}/>
                                                        </CharacterBadge>
                                                }
                                        </CharacterStatus>
                                    </Cell>
                                </Row>
                                <Row>
                                    <Cell>
                                        <CharacterInnerTitle>Gender</CharacterInnerTitle>
                                        <CharacterGender>
                                            {
                                                characterDetails?.gender === 'Male' ?
                                                    <CharacterBadge iconColor="white" bgcolor='#4b35f2'>
                                                        <FontAwesomeIcon icon={iconMale}/>
                                                    </CharacterBadge> :
                                                    characterDetails?.gender === "Female" ? 
                                                        <CharacterBadge iconColor="white" bgcolor='#f23535'>
                                                            <FontAwesomeIcon icon={iconFemale}/>
                                                        </CharacterBadge> :
                                                        characterDetails?.gender === "Genderless" ?
                                                            <CharacterBadge iconColor="white" bgcolor='#35f248'>
                                                                <FontAwesomeIcon icon={iconGenderless}/>
                                                            </CharacterBadge> : 
                                                            <CharacterBadge iconColor="white" bgcolor='#31d6bd'>
                                                                <FontAwesomeIcon icon={iconUnknown}/>
                                                            </CharacterBadge>
                                            }
                                        </CharacterGender>
                                    </Cell>
                                    <Cell>
                                        <CharacterInnerTitle>Species</CharacterInnerTitle>
                                        <CharacterSpecies>
                                            {characterDetails?.species}
                                        </CharacterSpecies>
                                    </Cell>
                                    <Cell>
                                        <CharacterInnerTitle>Type</CharacterInnerTitle>
                                        <CharacterType>
                                            {characterDetails?.type ? characterDetails?.type : 'None'}
                                        </CharacterType>
                                    </Cell>
                                </Row>
                                <Row>
                                    <Cell>
                                        <CharacterInnerTitle>Original Location</CharacterInnerTitle>
                                        <CharacterOrigin>
                                            {characterDetails?.origin.name}
                                        </CharacterOrigin>
                                    </Cell>
                                </Row>
                            </Box>
                        </Cell>
                    </Row>
                    <Row>
                        <Box color="linear-gradient(239deg, rgba(41,30,83,1) 4%, rgba(42,60,97,1) 58%, rgba(4,31,56,1) 92%)">
                            <Row>
                                <Cell border={true} borderColor="white">
                                    <CharacterLocation>
                                        <Cell>
                                            <CharacterInnerTitle>Last known location</CharacterInnerTitle>
                                        </Cell>
                                        <Cell>
                                            <CharacterLocationText>{characterDetails?.location.name}</CharacterLocationText>
                                        </Cell>
                                    </CharacterLocation>
                                </Cell>
                                <Cell border={true} borderColor="white">
                                    
                                    <CharacterEpisodeList>
                                        <Cell>  
                                            <CharacterInnerTitle>Character Episode List</CharacterInnerTitle>
                                        </Cell>
                                        <Cell>
                                            {characterDetails?.episode.map(ep =>{
                                                let keyNumber = ep.replace("https://rickandmortyapi.com/api/episode/", "");

                                                return <Episode key={`k${keyNumber}`}>{ep}</Episode>
                                            })}
                                        </Cell>
                                    </CharacterEpisodeList>
                                </Cell>
                            </Row>
                        </Box>
                    </Row>
                </DetailBox>
            </CharacterGridContent>
        </CharacterGridContainer>
    )
}

export default CharacterGridContainerComponent;