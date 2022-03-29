import React from "react";
import {
    GridContainer,
    GridHeader,
    GridContent,
    BackgroundImageComponent,
    PaginatorWrapper,
    ImgHeader,
    SearchWrapper
} from '../../appStyles';

const MainLayoutComponent: React.FC = () =>
{
    return (
        <GridContainer>
            <BackgroundImageComponent />
            <GridHeader >
                <ImgHeader />
                <SearchWrapper />
            </GridHeader>
            <PaginatorWrapper />
            <GridContent />
        </GridContainer>
    )
}

export default MainLayoutComponent;