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

        @media (max-width: 800px){
            font-size: 1rem;
            margin: 0 15px 0 8px;
        }
    `

    const Div = styled.div`
        display: flex;
        align-content: center;
        margin: 0 0px 0 85px;

        @media (max-width: 800px){
            margin: 0 0px 0 25px;
        }
    `

    const Div2 = styled.div`
        display: flex;
        flex-flow: row nowrap;
        align-content: center;
        margin: 0 85px 0 0px;

        @media (max-width: 800px){
            margin: 0 0px 0 0px;
            flex-direction: row;
        }
    `

    const Img = styled.img`
        height: 1.1rem;
        @media (max-width: 800px){
            margin: 0 0 5px 15px;
        }
    `

    const IconDiv = styled.div`
        display: flex;
        flex-flow: row nowrap;
        @media (max-width: 800px){
            flex-flow: column wrap;
            align-items: flex-start;
        }
    `

    return (
        <StyledFooter>
            <Div>
                <FooterNavButton>About Us</FooterNavButton>
                <FooterNavButton>Contact</FooterNavButton>
            </Div>
            <Div2>
                <IconDiv>
                    <Img src="twitter.svg" alt=""></Img>
                    <FooterNavButton>Twitter</FooterNavButton>
                </IconDiv>
                <IconDiv>
                    <Img src="facebook.svg" alt=""></Img>
                    <FooterNavButton>Facebook</FooterNavButton>
                </IconDiv>
            </Div2>
        </StyledFooter>
    )
}