import styled from "styled-components"
import { Link } from 'gatsby';


export const Container= styled.div`
width: 60vw;
max-height:792px;
margin-top: 350px;
margin: 0 auto;
border-bottom: 1px solid  #BFBFBF;
padding-bottom: 58px;
background-color:white;
justify-content:flex-end;
display:flex;

flex-direction: column;

@media(max-width:2920px){
    margin-top: 350px;
}
@media(max-width:2320px){
    margin-top: 250px;
}
@media(max-width:1920px){
    margin-top: 150px;
}
@media(max-width:1700px){
    margin-top: 100px;
    
}
@media(max-width:1460px){
    margin-top: 50px;
    
}
@media(max-width:1033px){
    margin-top: 60px;
    width: 70vw;
}


& div:nth-of-type(1){
    display:flex;
    width: 100%;
    justify-content:space-between;
    margin-bottom: 30px;
    @media(max-width:660px){
        flex-direction:column;
        
    }

}
& img {
    border-radius: 20px;
}
& h1 {
    width:60%;
    font-family: Jost, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 52px;
@media(max-width:1400px){
    width:80%;
    font-size: 32px;
    line-height: 48px;
    
}
@media(max-width:1200px){
    width:85%;
    font-size: 32px;
    line-height: 48px;
    
}
@media(max-width:1033px){
    width:95%;
    font-size: 28px;
    line-height: 42px;
}
@media(max-width:768px){
    width:100%;
    font-size: 25px;
    line-height: 32px;
}
@media(max-width:380px){
    width:100%;
    font-size: 22px;
    line-height: 25px;
}
}

& h4 {
    display:inline-block;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    color: #6E6E6E;
    @media(max-width:768px){
        
        font-size: 15px;
        line-height: 20px;
    }
}
& a {
    display:block;
    max-width: 200px;
    position: relative;
    padding-right: 40px;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 29px;
    text-decoration:none;
    color: #111111;
    & img {
        position: absolute;
        right:0;
        top:50%;
        transform: translateY(-50%);
        
    }
    @media(max-width:768px){
        
        font-size: 12px;
        line-height: 20px;
    }
    @media(max-width:660px){
        max-width: 175px;
        
    }
}
`

export const StyledLink= styled(Link)`
    text-decoration: none;
    color: inherit;
    display:flex;
    flex-direction:row;
    


`

