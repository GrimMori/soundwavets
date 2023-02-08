import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

export function JoinForm(){

    const StyledForm = styled.form`
        color: white;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: ${colors["nav-bg"]};
        border-radius: 20px;
    `

    const StyledInputs = styled.input`
        width: 400px;
        margin: 5px 0 30px 0;
        border: ${colors["border-input"]} 1px solid;
        border-radius: 4px;
        background-color: ${colors["nav-bg"]};
        font-size: 1.5rem;
        &:focus{
            border: ${colors["border-input-focus"]}
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
    `

    return(
        <StyledForm>
            <label>Name:</label>
            <StyledInputs type="text"></StyledInputs>
            <label>Email:</label>
            <StyledInputs type="text"></StyledInputs>
            <label>Password:</label>
            <StyledInputs type="text"></StyledInputs>
            <StyledSubmit type="submit" value="Join Now"></StyledSubmit>
        </StyledForm>
    )
}