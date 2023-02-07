import styled from "styled-components";
import { colors } from "../theme";

export const NavButton = styled.a`
    color: white;
    background: none;
    border: 0;
    font-size: 1rem;
    margin-left: 15px;
    text-decoration: none;

    &:hover {
    color: ${colors["nav-hover"]};
    cursor: pointer;
    }

    &:visited {
        text-decoration: none;
    }
`