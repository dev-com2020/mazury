import React, {UseState, useEffect, useState} from 'react'
import Footer from "./Footer/Footer"
import Navigation from "./Navbar/NavbarDesktop/NavbarDesktop"
import MobileNavigation from "./Navbar/NavbarMobile/NavbarMobile"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../assets/styles/globalStyles"

export default ({ children }) =>{
    const data = useStaticQuery(
        graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }`
    )
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        if (window.innerWidth<1033) setIsMobile(true);
        function handleResize(){
            if (window.innerWidth<1033) setIsMobile(true);
            else setIsMobile(false);
        }
        window.addEventListener("resize", handleResize)
    })
    return (
        <>
        <GlobalStyle/>
        { isMobile ? <MobileNavigation/> : <Navigation/>}
        { children }
        <Footer/>
        </>
    )
}