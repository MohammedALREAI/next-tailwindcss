
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  color: #838383; 
font-family: Lato, Arial, Helvetica, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 18px;
background: url("http://www.soaptheme.net/wordpress/travelo/wp-content/themes/Travelo/images/global-map.jpg") no-repeat;
padding: 80px 0px 70px;
background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center center;
    min-height:443px;
    height:auto;
    margin-top: 70px;
    margin-bottom: 70px;

`;



export const ImageWrapper = styled('img')`

width: 100%;
height:72px ;
background-repeat: no-repeat;
max-width: 245.2px;
cursor: pointer;
background-position: center;     
   opacity: 0.7;
    transition: opacity .3s ease-out;
    object-fit: fill;
    transition: all 0.4s ease-out;
    &:hover {
        transform: scale(1.02);

        transition: all 0.4s ease-out;
        opacity: 1;
        background:green;
        background-position: center center;

    }

    &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        -webkit-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;   
        filter: alpha(opacity=0);
        opacity: 1;
        background:red;
    }


`


export const  SubHeaderTitle=styled('h3')`
font-family: Lato, Arial, Helvetica, sans-serif;
font-size: 22px;
font-weight: 700;
font-weight: 400;
height: 21px;
line-height: 21.6655px;

color: #2d3e52; 
`

