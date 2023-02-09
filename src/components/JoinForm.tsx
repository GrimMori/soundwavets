import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

export function JoinForm(){

    const StyledForm = styled.form`
        color: white;
        display: flex;
        flex-direction: column;
        padding: 30px 60px;
        margin: 0 300px 0 0;
        background-color: ${colors["nav-bg"]};
        border-radius: 20px;
        @media (max-width: 800px){
            width: 60vw;
            margin: 20px;
        }
    `

    const StyledLabel = styled.label`
        font-weight: bold;
        font-size: 1.1rem;
    `

    const StyledInputs = styled.input`
        width: 400px;
        margin: 5px 0 30px 0;
        border: ${colors["border-input"]} 1px solid;
        border-radius: 4px;
        color: white;
        background-color: ${colors["nav-bg"]};
        font-size: 1.5rem;
        &:focus{
            border: ${colors["border-input-focus"]}
        }
        @media (max-width: 800px){
            width: 60vw;
        }
    `

    const StyledSubmit = styled.input`
        color: white;
        background-color: ${colors["button-bg"]};
        border: 0px;
        border-radius: 8px;
        padding: 12px 20px 12px 20px;
        font-size: 1rem;
        text-decoration: none;
        width: 100%;

        &:hover {
        background-color: ${colors["button-hover"]};
        cursor: pointer;
        }
        &:focus {
            background-color: ${colors["button-focus"]};
        }
        @media (max-width: 800px){
            width: 60vw;
        }
    `

    return(
        <StyledForm>
            <StyledLabel>Name:</StyledLabel>
            <StyledInputs type="text"></StyledInputs>
            <StyledLabel>Email:</StyledLabel>
            <StyledInputs type="text"></StyledInputs>
            <StyledLabel>Password:</StyledLabel>
            <StyledInputs type="text"></StyledInputs>
            <StyledSubmit type="submit" value="Join Now"></StyledSubmit>
        </StyledForm>
    )
}