import styled from "styled-components";
import { colors } from "../theme";

export const StyledButton = styled.a`
    color: white;
    background-color: ${colors["button-bg"]};
    border: 0px;
    border-radius: 8px;
    padding: 12px;
    font-size: 0.8rem;
    text-decoration: none;
    text-align: center;
    width: 5rem;

    &:hover {
    background-color: ${colors["button-hover"]};
    cursor: pointer;
    }
    &:focus {
        background-color: ${colors["button-focus"]};
    }
`