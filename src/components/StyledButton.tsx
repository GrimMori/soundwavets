import styled from "styled-components";
import { colors } from "../theme";

export const StyledButton = styled.a`
    color: white;
    background-color: ${colors["button-bg"]};
    border: 0px;
    border-radius: 8px;
    padding: 12px 20px 12px 20px;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
    background-color: ${colors["button-hover"]};
    cursor: pointer;
    }
    &:focus {
        background-color: ${colors["button-focus"]};
    }
`