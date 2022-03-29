import styled from "styled-components";
// Main Page Component imports
import HeaderWrapperComponent from "./Layout/components/HeaderWrapperComponent";
import ContentWrapperComponent from "./Layout/components/ContentWrapperComponent";
import SearchWrapperComponent from "./Layout/components/SearchWrapperComponent";
import SearchInputComponent from "./Layout/components/parts/SearchInputComponent";
import DropdownWrapperComponent from "./Layout/components/DropdownWrapperComponent";
import DropdownHeaderComponent from "./Layout/components/parts/DropdownHeaderComponent";
import DropdownListComponent from "./Layout/components/parts/DropdownListComponent";
import PagingWrapperComponent from "./Paginator/components/PaginatorWrapperComponent";
import PaginatorContainerComponent from "./Paginator/components/PaginatorContainerComponent";
import CharacterCardComponent from "./Layout/components/parts/CharacterCard";
import CardImageComponent from './Layout/components/parts/CardImageComponent';
import headerImage from '../images/RickandMortyTitle.png';
import BackgroundImage from '../images/85334.jpg';
import CardBackgroundImage from '../images/pexels-guillaume-meurice-2873671.jpg';

// Character Page Components imports
import CharacterBadgeInnerComponent from './CharacterPage/components/parts/CharacterBadgeInnerComponent';
import BoxComponent from './CharacterPage/components/parts/BoxComponent';
import CellComponent from './CharacterPage/components/parts/CellComponent';

// Main Page Styled Components
export const Title: React.FC = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    text-align: center;
    font-size: 42px;
    font-family: 'Anton', sans-serif;
`;

export const LoadingComponent: React.FC = styled.div`
    font-size: 42px;
    text-align: center;
    height: 100vh;
`;

// Main Page Styled Grid Components
export const GridContainer: React.FC = styled.div`
    display: grid;

    color: white;
    grid-template-columns: repeat(8, calc(100% / 8));
    grid-template-areas: 
        "head head head head head head head head"
        "pagin pagin pagin pagin pagin pagin pagin pagin"
        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content";
    grid-gap: 0;
    width:100%;
    justify-items: stretch;
`;

export const GridHeader: React.FC = styled(HeaderWrapperComponent)`
    grid-area: head;
    grid-column: span 8;

    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const GridContent: React.FC = styled(ContentWrapperComponent)`
    grid-area: content;
    grid-column: span 8;
    // grid-row: span 6;
    height: 100%;
    padding: 80px 120px 80px 80px;
`;

export const Container: React.FC = styled.div`
    display: grid;
    grid-template-columns: repeat(5, calc(100% / 5));
    grid-gap: 15px;
    margin: 20px 20px 100px 20px;
    width: 100%;
    margin: auto;

    @media (max-width: 1050px){
        grid-template-columns: repeat(4, calc(100% / 4));
    }

    @media (max-width: 860px){
        grid-template-columns: repeat(3, calc(100% / 3));
    }

    @media (max-width: 650px){
        grid-template-columns: repeat(2, calc(100% / 2));
    }

    @media (max-width: 490px){
        grid-template-columns: repeat(1, calc(100% / 1));
        margin: 0;
    }
`;

// Header Styled Components
export const BackgroundImageComponent: React.FC = styled.img`
    position: fixed;
    bottom: 0px;
    z-index: -1;
    height: 100%;
    width: 100%;
`;

export const ImgHeader: React.FC = styled.img`
    display: inline-block;
    margin: 20px auto;
    height:120px;


    @media (max-width:500px){
        height: 80px;
    }
`;

export const SearchWrapper: React.FC = styled(SearchWrapperComponent)`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;

`;

export const SearchInput: React.FC = styled(SearchInputComponent)`
    margin: 10px auto;
    width: 90%;
    height: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 22px;
    text-align: center;

    &:focus {
        outline:0px solid yellow;
        border: 0px solid yellow;
        background-color: #fffef0;
    }
`;

// Dropdown Style Components
export const DropdownWrapper: React.FC = styled(DropdownWrapperComponent)`
    display: inline-block;
    width:10%;
    min-width:100px;
    font-family: Helvetica;
`;

export const ResetButton = styled.button`
    padding: 5px 20px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: white;
    background-color: #574ede;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #8f89e8;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
       }

    &:active {
        transform: translateY(-2px);
    }
`

export const DropdownHeader = styled(DropdownHeaderComponent)<DropdownHeaderProps>`
    font-size: 22px;
    text-align: center;
    position: relative;
    // top: 8px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 38px;
    width: 100%;
    color: black;
    background-color: #e8f9ff;
    // border: 2px solid yellow;
    padding: 0px;

`;

export const DropdownText : React.FC = styled.span`
    margin: 0 8px;
`;

export const DropdownList = styled(DropdownListComponent)<DropdownListProps>`
    display: block;
    position: absolute;
    background-color: rgb(232,249,255);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-width: 98px;
    width:8%;
    max-width: 152px;
    padding: 4px;
    z-index:2;
`;

export const DropdownBox: React.FC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    color:black;
`;

export const DropdownBoxItem: React.FC = styled.div`
    // border: 1px solid gray;
    width: 100%;
    padding:2px;

    &:hover{
        background-color: #daeaf0;
    }
`;

export const DropdownTitle: React.FC = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 4px;
`;

// Card Styled Components
export const CharacterCard= styled(CharacterCardComponent)<CharacterCardProps>`
    background-color: #4B3E79;
    text-decoration: none;
    grid-column: span 1;
    padding: 0;
    margin: 7.5px;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    border: 2px solid gray;
`;

export const Li: React.FC = styled.div`
    align: center;
    background-image: url(${CardBackgroundImage});
    background-size: 200%;
    color: white;
    border: 2px solid gray;
    display: grid;
    grid-template-areas:
        "card-image"
        "card-text";
    opacity: 0.9;
    border-radius: 15px;
    width: 100%;

    &:hover{
        transform: scale(1.04);
    }
`;

export const CardTextHolder: React.FC = styled.div`
    // border:1px solid yellow;
    grid-area: card-text;
`;

export const CardTextTitle: React.FC = styled.div`
    font-weight: bold;
    font-size:26px;
    text-align: center;
    padding: 10px 0;
`;

export const CardTextType: React.FC = styled.div`
    font-weight: bold;
    font-size:20px;
    text-align: center;

    @media(max-width: 1240px){
        font-size:17px;
    }

    @media(max-width: 1090px){
        font-size:15px;
    }
`;

export const CardTextStatus: React.FC = styled.div`
    font-weight: bold;
    font-size:20px;
    text-align: center;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 1240px){
        font-size:17px;
    }

    @media(max-width: 1090px){
        font-size:15px;
    }
`;

export const CardTextStatusTitle: React.FC = styled.div`
    margin: 0 10px;
`;

export const CardTextStatusContent: React.FC = styled.span`
    margin: 0 10px 0 0 ;
`;

export const CardImageContainer: React.FC = styled.div`
    grid-area: card-image;
    width: 100%;
    height: 40%;
`;

export const CardImage = styled(CardImageComponent)<CardImageProps>`
    width:100%;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    margin:auto;
    align: center;

    // @media (max-width: 360px){
    //     width: 90%;
    // }

    @media (max-width: 350px){
        width: 90%;
    }
`;

export const IconContainer: React.FC = styled.div`
    margin-left: 10px;
    display:inline-block;
    font-size: 20px;
`;


// Paginator Styled Components
export const PaginatorWrapper: React.FC = styled(PagingWrapperComponent)`
    grid-area: pagin;
    background-color: #130e38;
    width: 100%;
    display: flex;
`;

export const PaginatorContainer: React.FC = styled(PaginatorContainerComponent)`
    display: inline-block;
    margin: auto;
    border: 1px solid #5d95b0;
    padding: 4px 40px;
    border-radius: 10px;

    @media (max-width: 490px){
        padding: 4px 0;
        display: flex;
    }
`;

export const PaginatorText: React.FC = styled.span`
    margin: 0 0 0 25px;

    @media (max-width: 490px){
        margin: 0 0 0 5px;
    }
`;

export const PaginatorButton = styled.button`
    padding: 5px 20px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-4px);
       }

    &:active {
        transform: translateY(-1px);
    }
`;

// Character Details Page Styled Components
export const CharacterGridContainer: React.FC = styled.div`
    display: grid;
    height: 100vh;
    color: white;
    grid-template-columns: repeat(8, calc(100% / 8));
    grid-template-areas: 
        "head head head head head head head head"

        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content"
        "content content content content content content content content";
    grid-gap: 0;
    width:100%;
    justify-items: stretch;
`;

export const BackButton = styled.button`
    width: 60%;
    padding: 5px 20px;
    margin: auto;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-4px);
       }

    &:active {
        transform: translateY(-1px);
    }
`;

export const CharacterGridContent: React.FC = styled.div`
    grid-area: content;
    grid-column: span 8;
    height: 100%;
    display: flex;

    aling-items: center;
    justify-content: center;
`;

export const DetailBox : React.FC = styled.div`
    display: inline-block;
    width: 80%;
    border:2px solid #C3D3F8;
    border-radius: 8px;
    margin: 10px 0 10px 0;
    padding: 20px;
    background: linear-gradient(135deg, rgba(5,1,20,1) 4%, rgba(63,78,108,1) 83%, rgba(1,72,87,1) 100%);

    @media (max-width: 530px){
        padding: 5px;
        margin: 5px 0 5px 0;
    }
`;

export const Row : React.FC = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 826px){
        flex-direction: column;
    }
`;

export const Cell : React.FC <CellProps> = styled(CellComponent)`
    border: ${ props => props.border ? '1px' : '0px'} solid ${props => props.borderColor};
    padding: 10px;
    font-weight: bold;
    font-size: 25px;
    text-align: center;

    @media (max-width: 1050px){
        font-size: 18px;
    }

    @media (max-width: 530px){
        padding: 5px;
    }

`;

export const Box: React.FC <BoxProps> = styled(BoxComponent)`
    padding: 20px 40px;
    border: 1px solid white;
    border-radius: 10px;
    background: ${props => props.color}
`;

export const CharacterTitle : React.FC = styled.div`
        font-weight: bold;   
`;

export const CharacterStatus : React.FC = styled.div`
    font-weight: bold;
`;

export const CharacterInnerTitle : React.FC = styled.div`
    font-size: 30px;    
    text-align: center;

    @media (max-width: 1050px){
        font-size: 24px; 
    }

    @media (max-width: 920px){
        font-size: 20px; 
    }

    @media (max-width: 600px){
        font-size: 18px; 
    }
`;

export const CharacterBadge : React.FC <CharacterBadgeProps> = styled(CharacterBadgeInnerComponent)`
    display: inline-block;
    width: 23px;
    height: 24px;
    background-color: ${props => props.bgcolor || 'white'};
    padding:2px;
    margin: 10px;
    z-index: 10;
    border-radius: 30%;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.23);
    font-size: 18px;

    svg{
        font-size: 1.2em;
		margin-top: 1px;
        margin-left: 1px;
        color:${props => props.iconColor};
    }

`;

export const CharacterGender : React.FC = styled.div`
`;

export const CharacterSpecies : React.FC = styled.div`
`;

export const CharacterType : React.FC = styled.div`
`;

export const CharacterOrigin : React.FC = styled.div`
    @media (max-width: 600px){
        font-size: 16px; 
    }
`;

export const CharacterEpisodeList : React.FC = styled.ul`
    font-size:18px;

    @media (max-width: 530px){
        position: relative;
        right: 24px; 
    }
`;

export const Episode : React.FC = styled.li`
    font-size:18px;
    padding: 2px 0;
    word-wrap: break-word;
    

    @media (max-width: 650px){
        font-size: 16px; 
    }

    @media (max-width: 600px){
        font-size: 14px;
        font-weight: 400; 
    }

    @media (max-width: 530px){
        font-size: 12px;
        font-weight: 400;
    }
`;

export const CharacterLocation : React.FC = styled.div`
    font-size:20px;
    padding: 5px;

    @media (max-width: 1050px){
        font-size: 18px; 
    }

    @media (max-width: 920px){
        font-size: 16px; 
    }

    
`;

export const CharacterLocationText : React.FC = styled.div`
    padding:5px;
    margin-top: 5px;

    @media (max-width: 600px){
        font-size: 14px; 
    }
`;

export const CharacterImage = styled.img`
    // margin-top:10px;
    border: 1px solid white;
    border-radius: 15px;
    width:100%;

    @media (max-width: 920px){
        width:80%; 
    }

    @media (max-width: 700px){
        width:60%; 
    }
`;



// Default Component props 
ImgHeader.defaultProps = {
    src: headerImage
}

SearchInput.defaultProps = {
    placeholder: 'Search'
}

BackgroundImageComponent.defaultProps = {
    src: BackgroundImage
}

// Props interfaces
interface DropdownHeaderProps {
    className?: string;
    title: string;
}

interface DropdownListProps {
    className?: string;
    list?: string[];
}

// interface ResetButtonProps {
//     className?: string;
//     onClick?: () => void;
// }

interface CharacterCardProps {
    className?: string;
    species?: string;
    id?: number;
    image?: string;
    name?: string;
    status: string;
}

interface CardImageProps {
    className?: string;
    image?: string;
    name?: string;
}

interface CharacterBadgeProps {
    className?: string;
    iconColor?: string;
    bgcolor?: string;
} 

interface BoxProps {
    className?: string;
    color?: string;
} 

interface CellProps {
    className?: string;
    borderColor?: string;
    border?:boolean;
}