import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { StyledButton } from "./StyledButton";
import { StyledH1 } from "./StyledH";

export function FeelTheMusic(){

    const LandingImg = styled.img`
      z-index: -1;
      width: 370px;
      margin: 130px 100px 0px 0px;
    `

    const HomeP = styled.p`
      color: white;
      width: 400px;
      margin: 10px 0 20px 0;
    `

    const Main = styled.main`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 20%;
      bottom: 0;
    `
    const Circle = styled.div`
      z-index: -2;
      border-radius: 50%;
      width: 370px;
      height: 370px;
      background-color: ${colors["circle-1"]};
      position: fixed;
      left: 80px;
      bottom: 80px;
    `
    const Circle2 = styled.div`
      z-index: -2;
      border-radius: 50%;
      width: 360px;
      height: 360px;
      background-color: ${colors["circle-2"]};
      position: fixed;
      left: 24%;
      bottom: 28%;
    `
    const Circle3 = styled.div`
      z-index: -2;
      border-radius: 50%;
      width: 800px;
      height: 800px;
      background-color: ${colors["circle-2"]};
      position: fixed;
      right: -400px;
      bottom: -400px;
    `

    return(
        <Main>
          <Circle></Circle>
          <Circle2></Circle2>
          <Circle3></Circle3>
          <LandingImg src="landing-page-girl.png" alt="girl" ></LandingImg>
          <div>
            <StyledH1>Feel The Music</StyledH1>
            <HomeP>Stream over 20 thousand songs with one click</HomeP>
            <StyledButton href="/join">Join Now</StyledButton>
          </div>
        </Main>
    )
}