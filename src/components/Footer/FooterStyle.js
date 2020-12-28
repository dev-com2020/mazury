import styled from "styled-components"
import { Link } from 'gatsby';

export const StyledContainer = styled.div`
width: 60vw;
height:555px;
margin: 0 auto;
overflow:hidden;
background-color:white;
flex-direction: column;
display:flex;
@media(max-width:1161px) {
    height: 115vh;
}
@media(max-width:360px) {
    height: 150vh;
}
`
export const StyledDivUp = styled.div`
width: 60vw;
height:140px;
margin: 0 auto;
align-items:center;
border-bottom: 1px solid  #BFBFBF;
overflow:hidden;
justify-content:space-between;
background-color:white;
display:flex;
flex-direction: row;
@media(max-width:1161px) {
    padding-top: 25px;
    border-top: 1px solid  #BFBFBF;
    flex-direction: column;
    align-items:center;
    height:400px;
    padding-bottom:50px;
}
@media(max-width:1024px) {
    height: 350px;
}
& div {
    display:flex;
    justify-content:center;
    align-items:center;
    text-align: center;
}

& button {
    background-color: #ff6338;
    border-radius: 8px;
    height: 50px;
    width: 175px;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 700 ;
    font-size: 17px;
    color:white;
    border: none;
}

& h2{
    color: #ff6338;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 900 ;
    font-size: 34px;
}
& h3 {
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    display:flex;
    line-height: 32px;
text-align: right;
}
@media(max-width:1350px){
    justify-self:flex-start;
}`
export const StyledDivCenter = styled.div`
width: 60vw;
height:290px;
margin: 0 auto;
justify-content:space-between;
background-color:white;
margin-top: 40px;
display:flex;
@media(max-width:1161px) {
    flex-direction: column;
    align-items:center;
    height: 500px;
}
@media(max-width: 700px) {
    height: 400px;
}
& div:nth-of-type(1) {
    text-align:center;
    @media(max-width:1161px) {
        margin-bottom: 50px;
    }
    & h3 {
        text-align:center;
        width:300px;
        @media(max-width:435px) {
            width:230px;
        }
    }
}
& h3 {
    font-family: 'Jost', sans-serif;
    width:60%;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 32px;
    text-align: left;
}
& button {
    background-color: #ff6338;
    border-radius: 8px;
    height: 50px;
    width: 50px;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 700 ;
    font-size: 17px;
    color:white;
    border: none;
    display:inline;
}
& input {
    width:240px;
    height: 50px;
    border:none;
    border-bottom: 1px solid  #BFBFBF;
}`
export const StyledDivDown = styled.div`
width: 60vw;
height:100px;
margin: 0 auto;
overflow:hidden;
background-color:white;
justify-content:space-between;
align-items:center;
display:flex;
@media(max-width:786px) {
    height: 200px;
    margin-top: 50px;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
& h4 {
    color: #111111;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    text-decoration: none;
    padding-right:40px;
}
& div {
    display: flex;
}
& div:nth-of-type(1) {
    @media(max-width:786px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
        & a h4 {
            padding-right:0;
        }
        & a:nth-of-type(1) h4 {
            width: 150px !important;
        }
    }
}
& div:nth-of-type(2) {
    @media(max-width:800px) {
        justify-content:space-between;
        width:40vw;
    }
    }
    `
export const StyledLinkDown = styled(Link)`
color: #111111;
letter-spacing: -0.3px;
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 9px;
text-decoration: none;
display: flex;
margin: 0 auto;
@media(max-width:400px) {
    width:${({ policy }) => policy ? "100px" : null};
}

`
export const StyledLink = styled(Link)`
color: ${({ orange }) => orange ? "#FF6338" : "#111111"};
font-family: 'Jost', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
text-decoration: none;
display: block;
padding:9px 45px;
@media(max-width:1461px) {
    padding:9px 25px;
}
@media(max-width:1200px) {
    padding: 9px 15px;
}

`;

export const StyledLinksWrapper = styled.div`
display:flex;
flex-direction:row;
& div:nth-of-type(1) {
    @media(max-width:420px) {
        width:80px;
    }
}
@media(max-width:1161px) {
    height: 50vh;
}
`;

export const StyledSubscribeButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
position:relative;
& img {
    position:absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
}
`;

export const StyledHeading = styled.h3`
margin-top:16px;
margin-right: 15px;
@media(max-width:800px) {
    margin-right: 0;
    font-size:16px !important;
}
`;
export const StyledRegistrationWrapper = styled.div`
@media(max-width:1161px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom: 50px;
}
@media(max-width:800px) {
    width:140%;
}
`;
export const StyledInput = styled.input`
@media(max-width:555px) {
    width: 160px !important;
}
`;
export const StyledSocialMedia = styled.img`
padding-left:45px;
@media(max-width:800px) {
    padding-left: 0;
}
`;

export const StyledPolicyHeading = styled.h4`
min-width:150px;
`;