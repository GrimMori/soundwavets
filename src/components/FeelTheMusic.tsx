import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { StyledButton } from "./StyledButton";
import { StyledH1 } from "./StyledH";

export function FeelTheMusic(){

    const LandingImg = styled.img`
        z-index: -1;
        width: 440px;
        margin: 130px 0px 0px 0px;
        position: absolute;
        left: 20%;
        bottom: 0;
        @media (max-width: 800px){
            display: none;
        }
    `

    const HomeP = styled.p`
        color: white;
        font-size: 1.3rem;
        width: 450px;
        margin: 15px 0 25px 0;
        font-weight: bold;
        @media (max-width: 800px){
            width: 320px;
            font-size: 1.2rem;
            font-weight: 100;
        }
    `

    const Main = styled.main`
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    `

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        width: 30vw;
        margin: 33vh 51.5vw 0;
        @media (max-width: 800px){
            width: 200px;
            margin: 20vh 10vw 0;
        }
    `
    const Circle = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 450px;
        height: 450px;
        background-color: ${colors["circle-1"]};
        position: fixed;
        left: 80px;
        bottom: 80px;
        @media (max-width: 800px){
            width: 100px;
            height: 100px;
            left: 10px;
            bottom: 10px;
        }
    `
    const Circle2 = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 450px;
        height: 450px;
        background-color: ${colors["circle-2"]};
        position: fixed;
        left: 28%;
        top: 15%;
        @media (max-width: 800px){
            width: 100px;
            height: 100px;
        }
    `
    const Circle3 = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 750px;
        height: 750px;
        background-color: ${colors["circle-2"]};
        position: fixed;
        right: -300px;
        bottom: -300px;
        @media (max-width: 800px){
            width: 150px;
            height: 150px;
            right: -50px;
            bottom: -50px;
        }
    `

    return(
        <Main>
            <Circle></Circle>
            <Circle2></Circle2>
            <Circle3></Circle3>
            <LandingImg src="landing-page-girl.png" alt="girl" ></LandingImg>
            <Div>
                <StyledH1>Feel The Music</StyledH1>
                <HomeP>Stream over 20 thousand songs with one click</HomeP>
                <StyledButton href="/join">Join Now</StyledButton>
            </Div>
        </Main>
    )
}