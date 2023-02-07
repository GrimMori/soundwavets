import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { NavButton } from "./NavButton";

export function Header(){
      
    const NavLogo = styled.img`
        width: 50px;
        height: 50px;
        padding: 13px;
    `

    const StyledHeader = styled.header`
        z-index: +1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px 0 0 0;
        width: 100vw;
    `

    const Logo = styled.a`
        z-index: +2;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        &:visited{
            text-decoration: none;
        }
        &:hover{
            cursor: pointer;
            color: ${colors["nav-hover"]}
        }
    `

    const NavDiv = styled.div`
        z-index: +2;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
    `

    return(
        <StyledHeader>
          <Logo href="/">
            <NavLogo src="logo.png" alt="logo" ></NavLogo>
            <p>SoundWave</p>
          </Logo>
          <NavDiv>
            <NavButton href="/discover">Discover</NavButton>
            <NavButton href="/join">Join</NavButton>
          </NavDiv>
        </StyledHeader>
    )
}