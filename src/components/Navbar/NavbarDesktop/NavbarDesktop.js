import React from 'react';
import Email from '../../../images/email.svg'
import Telephone from '../../../images/telephone.svg'
import Logo from '../../../images/logo.svg'
import {
    StyledList,
    StyledItem,
    StyledLink,
    StyledNav,
    StyledUpBar,
    StyledUpBarLink,
    StyledWrapper,
    StyledListDiv,
} from './NavbarDesktopStyle';

const Navigation = () => {

    return (
        <><StyledWrapper>
        <StyledUpBar>
            <div>
               <StyledUpBarLink to="/">Facebook</StyledUpBarLink>
               <StyledUpBarLink to="/">Twitter</StyledUpBarLink>
               <StyledUpBarLink to="/">Youtube</StyledUpBarLink>

            </div>
            <div>
            <StyledUpBarLink to="/"><img src={Telephone}/>+48 535 535 535</StyledUpBarLink>
            <StyledUpBarLink to="/"><img src={Email}/>emailjeziora@gmail.com</StyledUpBarLink>
            </div>
        </StyledUpBar>
        </StyledWrapper>
            <StyledNav>
            <StyledListDiv>
                        <img src={Logo}/>
                        <h2>happenz</h2>
                        </StyledListDiv>
                <StyledList>
                
                    <StyledItem>
                        <StyledLink
                            to='/'
                            activeClassName="active"
                        >O nas</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/galeria'
                            activeClassName="active"
                        >Galeria</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/ciekawostki'
                            activeClassName="active"
                        >Ciekawostki</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/wydarzenia'
                            activeClassName="active"
                        >Wydarzenia</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/wspolpraca'
                            activeClassName="active"
                        >Współpraca</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/kontakt'
                            activeClassName="active"
                        >Kontakt</StyledLink>
                    </StyledItem>
                    
                </StyledList>
            </StyledNav>
        </>
    );
}

export default Navigation;