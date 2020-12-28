import React, { useState } from "react"
import Logo from '../../../images/logo.svg'
import {
    Navigation,
    Toggle,
    Navbox,
    Hamburger,
    StyledLinkList,
    LogoDiv,
    

} from "./NavbarMobileStyle"



const MobileNavigation = () => {
    
    const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
    <Navigation>
     
      
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <StyledLinkList to="/">O nas</StyledLinkList>
          <StyledLinkList to="/">Galeria</StyledLinkList>
          <StyledLinkList to="/">Ciekawostki</StyledLinkList>
          <StyledLinkList to="/">Wydarzenia</StyledLinkList>
          <StyledLinkList to="/">Współpraca</StyledLinkList>
          <StyledLinkList to="/">Kontakt</StyledLinkList>
        </Navbox>
      ) : (
        <Navbox open>
          <StyledLinkList to="/">O nas</StyledLinkList>
          <StyledLinkList to="/">Galeria</StyledLinkList>
          <StyledLinkList to="/">Ciekawostki</StyledLinkList>
          <StyledLinkList to="/">Wydarzenia</StyledLinkList>
          <StyledLinkList to="/">Współpraca</StyledLinkList>
          <StyledLinkList to="/">Kontakt</StyledLinkList>
        </Navbox>
      )}

    </Navigation>
    <LogoDiv>
    <img src={Logo}/>
    <h2>blog</h2>
    </LogoDiv>
    </>
  )
}

export default MobileNavigation;
