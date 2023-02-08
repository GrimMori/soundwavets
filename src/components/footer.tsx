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
        height: 60px;
    `

    const FooterNavButton = styled(NavButton)`
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0 25px 0 8px;
    `

    const Div = styled.div`
        align-content: center;
        margin: 0 0px 0 85px;
    `

    const Div2 = styled.div`
        align-content: center;
        margin: 0 85px 0 0px;
    `

    const Img = styled.img`
        height: 1.1rem;
    `

    return (
        <StyledFooter>
            <Div>
                <FooterNavButton>About Us</FooterNavButton>
                <FooterNavButton>Contact</FooterNavButton>
            </Div>
            <Div2>
                <Img src="twitter.svg" alt=""></Img>
                <FooterNavButton>Twitter</FooterNavButton>
                <Img src="facebook.svg" alt=""></Img>
                <FooterNavButton>Facebook</FooterNavButton>
            </Div2>
        </StyledFooter>
    )
}