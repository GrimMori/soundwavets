import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { StyledH2 } from "./StyledH";

export function DiscoverBody(){

    const Main = styled.main`
        display: flex;
        flex-direction: row;
        color: white;
        justify-content: center;
        align-items: center;
        margin: 100px;
        @media (max-width: 800px){
            flex-direction: column;
            width: 90vw;
            margin: 20px;
        }
    `

    const IconDiv = styled.div`
        display: flex;
        flex-direction: column;
        background-color: ${colors["nav-bg"]};
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        padding: 0px 0px 0px 0px;
        margin: 10px;
        @media (max-width: 800px){
            width: 80px;
            height: 80px;
        }
    `

    const DiscoverDiv = styled.div`
        display: flex;
        flex-direction: column;
    `

    const Icon = styled.img`
        width: 28px;
        margin: 0;
    `

    const P = styled.p`
        margin: 10px 0 0 0;
        @media (max-width: 800px){
            font-size: 1rem;
        }
    `

    const IconContainer = styled.div`
        display: flex;
        flex-direction: row;
    `

    const P2 = styled.p`
        font-size: 1.1rem;
        @media (max-width: 800px){
            font-size: 1rem;
        }
    `

    const Covers = styled.img`
        width: 320px;
        margin: 50px;
        @media (max-width: 800px){
            width: 260px;
            margin: 10px;
        }
    `

    return(
        <Main>
            <DiscoverDiv>
                <StyledH2>Discover new music</StyledH2>
                <IconContainer>
                    <IconDiv>
                        <Icon src="microphone.svg" alt=""></Icon>
                        <P>Charts</P>
                    </IconDiv>
                    <IconDiv>
                        <Icon src="albums.svg" alt=""></Icon>
                        <P>Albums</P>
                    </IconDiv>
                    <IconDiv>
                        <Icon src="more.svg" alt=""></Icon>
                        <P>More</P>
                    </IconDiv>
                </IconContainer>
                <P2>By joining you can benefit by listening to the latest albums released.</P2>
            </DiscoverDiv>
            <Covers src="covers.jpg" alt="album covers"></Covers>
        </Main>
    )
}