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
    `

    const DiscoverDiv = styled.div`
        display: flex;
        flex-direction: column;
    `

    const Icon = styled.img`
        width: 32px;
        margin: 0;
    `

    const P = styled.p`
        margin: 10px 0 0 0;
    `

    const IconContainer = styled.div`
        display: flex;
        flex-direction: row;
    `

    const P2 = styled.p`
        font-size: 1.1rem;
    `

    const Covers = styled.img`
        width: 320px;
        margin: 50px;
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