import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { NavButton } from "./NavButton";
import logo from "../logo.png";

export function Header(){
      
    const NavLogo = styled.img`
        width: 56px;
        height: 56px;
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
        font-size: 1.4rem;
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
        padding: 0 40px 0 0;
    `

    return(
        <StyledHeader>
          <Logo href="/">
            <NavLogo src={logo} alt="logo" ></NavLogo>
            <p>SoundWave</p>
          </Logo>
          <NavDiv>
            <NavButton href="/discover">Discover</NavButton>
            <NavButton href="/join">Join</NavButton>
          </NavDiv>
        </StyledHeader>
    )
}