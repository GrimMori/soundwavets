import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { JoinForm } from "./JoinForm";

export function JoinBody(){

    const P = styled.p`
        color: white;
        margin: 0 0 0 300px;
        font-size: 3.6rem;
        font-weight: bold;
    `

    const Span = styled.span`
        color: ${colors["accent-text"]};
    `

    const Main = styled.main`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 180px;
    `
    const Circle = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 680px;
        height: 680px;
        background-color: ${colors["circle-1"]};
        position: fixed;
        left: -200px;
        bottom: -50px;
    `
    const Circle2 = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 480px;
        height: 480px;
        background-color: ${colors["circle-2"]};
        position: fixed;
        left: 19%;
        top: -15%;
    `

    return(
        <Main>
            <Circle></Circle>
            <Circle2></Circle2>
            <P>Join the <Span>fun.</Span></P>
            <JoinForm />
        </Main>
    )
}