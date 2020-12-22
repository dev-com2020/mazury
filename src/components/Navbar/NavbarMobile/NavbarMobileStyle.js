import styled from "styled-components"
import { Link } from 'gatsby';

export const Navigation = styled.nav`
  height: 35px;
  display: flex;
  width: 100vw;
  background-color: #ff6338;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

 
`
export const LogoDiv = styled.div`
display:flex;
width:60vw;
height: 124px;
align-items:center;
text-transform: lowercase;
justify-content:center;
margin: 0 auto;
padding-top:40px;

& h2{
    color: #ff6338;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 900 ;
    font-size: 34px;
}


 
`
export const StyledLinkList = styled(Link)`
color: #111111;
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 25px;
text-decoration: none;
list-style:none;
padding: 25px;
display:block;
&.active {
    font-weight: 400 ;
}
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 1350px) {
    display: flex;
  }
`

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1350px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 35px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
  &img {
    position: absolute;

  }
`

export const Hamburger = styled.div`
  background-color: #FFFFFF;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #FFFFFF;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
export const StyledUpBarLink = styled(Link)`
color: #ff6338;
position:relative;
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
padding-left: 30px;
text-decoration: none;


`;