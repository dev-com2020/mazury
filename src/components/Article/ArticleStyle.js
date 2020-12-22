import styled from 'styled-components';
import Img from 'gatsby-image'

export const Container = styled.div`
width:60vw;
height: 190px;
justify-content: space-between;
display: flex;
margin: 60px auto;
@media(max-width:1400px){
    flex-direction:column;
    height: 400px;
    align-items:left;
}
@media(max-width:600px) {
        margin: 60px auto 100px;
    }
    @media(max-width:457px) {
        margin: 60px auto 150px;
        
    }
    @media(max-width:396px) {
        margin: 60px auto 200px;

    }
`;
export const StyledWrapper = styled.div`
width: 80%;
    height:190px;
    font-size: 15px;
    @media(max-width:960px) {
        width: 100%;
    }
    @media(max-width:780px) {
        width: 120%;
    }
   
& h3{
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    color: #6E6E6E;

}
& h2{
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    color: #111111;
    margin-top:10px;
}
& p {
    font-family: 'Spectral';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}

`;
export const StyledImage = styled(Img)`
width:280px;
height:187px;
margin-right: 50px;
border-radius: 20px;
@media(max-width:1400px) {
    width: 70%;
}
@media(max-width:1000px) {
    width:100%;
}
`;