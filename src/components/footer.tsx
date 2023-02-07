import styled from "styled-components";
import { colors } from "../theme";
import { NavButton } from "./NavButton";

export function Footer(){
    
    const StyledFooter = styled.footer`
        position: fixed;
        bottom: 0%;
        width: 100%;
        background-color: ${colors["nav-bg"]};
        justify-content: space-around;
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 70px;
    `

    const FooterNavButton = styled(NavButton)`
        font-weight: bold;
        margin: 0 20px 0 5px;
    `;

    const Div = styled.div`
        align-content: center;
    `

    return (
        <StyledFooter>
            <Div>
                <FooterNavButton>About Us</FooterNavButton>
                <FooterNavButton>Contact</FooterNavButton>
            </Div>
            <Div>
                <img src="twitter.svg" alt=""></img>
                <FooterNavButton>Twitter</FooterNavButton>
                <img src="facebook.svg" alt=""></img>
                <FooterNavButton>Facebook</FooterNavButton>
            </Div>
        </StyledFooter>
    )
}