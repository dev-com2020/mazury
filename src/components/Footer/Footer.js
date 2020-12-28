import React from "react"
import Logo from '../../images/Logo.svg'
import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Instagram from '../../images/Instagram.svg'
import Path from '../../images/Path.svg'
import {
    StyledContainer,
    StyledDivUp,
    StyledDivCenter,
    StyledDivDown,
    StyledLink,
    StyledLinkDown,
    StyledLinksWrapper,
    StyledSubscribeButton,
    StyledHeading,
    StyledRegistrationWrapper,
    StyledInput,
    StyledSocialMedia,
    StyledPolicyHeading
} from './FooterStyle'

const Footer = () => {
    return (<>
    <StyledContainer>
        <StyledDivUp>
            <div>
                <img src = {Logo}/>
                <h2>blog</h2>
            </div>
            <StyledRegistrationWrapper>
                <StyledHeading>Zacznij korzystać za darmo: </StyledHeading>
                <button type="submit">Zarejestruj się</button>
            </StyledRegistrationWrapper>
            </StyledDivUp>
            <StyledDivCenter>
                <div>
                <StyledHeading>Zasubskrybuj nas, aby otrzymywać informacje:</StyledHeading>
                <form>
                    <StyledInput
                    type="text"
                    name="firstName"
                    />
                    <StyledSubscribeButton type="submit"><img src={Path}/></StyledSubscribeButton>
                </form>
            </div>
            <StyledLinksWrapper>
                <div>
                    <StyledLink orange to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                </div>
                <div>
                    <StyledLink orange to="/">Kontakt</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                    
                </div>
                <div>
                    <StyledLink orange to="/">Pomoc</StyledLink>
                    <StyledLink first to="/">O nas</StyledLink>
                </div>
            </StyledLinksWrapper>
            </StyledDivCenter>
            <StyledDivDown>
                <div>
                    <StyledLinkDown policy to="/"><StyledPolicyHeading>Polityka Prywatności</StyledPolicyHeading></StyledLinkDown>
                    <StyledLinkDown to="/"> <h4>Regulamin</h4></StyledLinkDown>
                    <StyledLinkDown to="/"> <i>Stylizowanie CSS: Agata Głogowska</i></StyledLinkDown>
                </div>
                <div>
                    <StyledLinkDown to="/"><StyledSocialMedia src={Facebook} /></StyledLinkDown>
                    <StyledLinkDown to="/"><StyledSocialMedia src={Twitter} /></StyledLinkDown>
                    <StyledLinkDown to="/"> <StyledSocialMedia src={Instagram} /></StyledLinkDown>
                </div>
            </StyledDivDown>
        </StyledContainer>
    </>
    );
    }
    export default Footer