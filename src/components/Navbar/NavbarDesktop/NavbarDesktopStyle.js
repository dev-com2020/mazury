import styled from 'styled-components';
import { Link } from 'gatsby';


export const StyledNav = styled.nav`
display:flex;
width: 60vw;
margin: 0 auto;
justify-content:flex-end;
align-items:center;
height:124px;
background-color:#FFFFFF;
z-index:9999;
overflow:hidden;
@media(max-width:1350px){
    width:70vw;
    justify-content:space-between;
}
@media(max-width:1200px){
    width:80vw;
}
@media(max-width:1060px){
    width:85vw;
}
`;

export const StyledListDiv = styled.div`
display:flex;
height: 124px;
align-items:center;
& h2{
    color: #ff6338;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 900 ;
    font-size: 34px;
}
@media(max-width:1350px){
    justify-self:flex-start;
}

`;
export const StyledList = styled.ul`
display:flex;
width:60vw;
justify-content:flex-end;

`;
export const StyledItem = styled.li`
list-style:none;
height: 124px;
text-align:center;
display:flex;
align-items: center;
padding-left: 40px;

`;
export const StyledLink = styled(Link)`
color: #111111;
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
text-decoration: none;
display:block;
&.active {
    font-weight: 700 ;
}
`;


export const StyledWrapper = styled.div`
width:100vw;
height:35px;
background-color:#ff6338;
`;


export const StyledUpBar = styled.div`
width:60vw;
margin: 0 auto;
height:35px;
background-color:#ff6338;
display:flex;
align-items: center;
overflow:hidden;
justify-content: space-between;
& img  {
    display:inline-block;
    position:absolute;
    left:0;
    top:50%;
    transform: translateY(-50%);

}
&  div:nth-of-type(1) a{
    padding-left:0;
    margin-right:20px;

}
&  div:nth-of-type(2) a{
    margin-left:40px;

}
@media(max-width:1350px){
    width:70vw;
}
@media(max-width:1200px){
    width:80vw;
}
@media(max-width:1060px){
    width:85vw;
}
`;

export const StyledUpBarLink = styled(Link)`
color: white;
position:relative;
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
padding-left: 30px;
text-decoration: none;

`;