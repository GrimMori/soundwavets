import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { JoinForm } from "./JoinForm";

export function JoinBody(){

    const P = styled.p`
        color: white;
        margin: 30px;
        font-size: 3.5rem;
        font-weight: bold;
    `

    const Span = styled.span`
        color: ${colors["accent-text"]};
    `

    const Main = styled.main`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    `
    const Circle = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 800px;
        height: 800px;
        background-color: ${colors["circle-1"]};
        position: fixed;
        left: -200px;
        bottom: -200px;
    `
    const Circle2 = styled.div`
        z-index: -2;
        border-radius: 50%;
        width: 500px;
        height: 500px;
        background-color: ${colors["circle-2"]};
        position: fixed;
        left: 22%;
        top: -10%;
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