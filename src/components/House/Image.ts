import styled, { keyframes } from 'styled-components';

export const TitleHostiles = styled('h3')`
    color: #2d3e52;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-size: 20.0004px;
    font-weight: 400;
    margin: 15px 0px;
`;

export const useDataImag = () => {
    let [first, ...images] = Array.from(Array(10).keys());

    let ar = images.map((x) =>
        Object.assign({}, { src: `http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/${x}.jpg` }),
    );

    return ar;
};

export const ImageAnimation = keyframes`
  0%  {
    background-size: 150% 150%;
    transform: scale(1.0); 
      }
  
  50% {
    background-size: 200% 200%;
    transform: scale(1.22); 

    }
  70% {
    background-size: 110% 110%;
    transform: scale(1.15); 

    }
  
  100% {
    background-size: 100% 100%;
    transform: scale(1); 

  }
`;

export const WrapperContainer = styled('div')`
    width: 100%;
    min-height: 162px;
    margin: 0px;
    padding: 0px;
    width: 270px;
    max-width: 270px;
    transition: all 0.4s ease-out;
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
        -webkit-transform: rotateY(180deg) scale(0.5, 0.5);
        -moz-transform: rotateY(180deg) scale(0.5, 0.5);
        -ms-transform: rotateY(180deg) scale(0.5, 0.5);
        -o-transform: rotateY(180deg) scale(0.5, 0.5);
        transform: rotateY(180deg) scale(0.5, 0.5);
        /* background: url(../images/icon/hover-effect.png) center no-repeat; */
        filter: alpha(opacity=0);
        -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
        -moz-opacity: 0;
        -khtml-opacity: 0;
        opacity: 0;
        background-color: rgba(1, 183, 242, 0.6);
    }
`;

export const Image = styled('img')`
    width: 100%;
    min-height: 162px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    max-width: 270px;
    object-fit: contain;
    width: 100%;
    opacity: 1;
    position: relative;
    transition: 0.8s;

    transition: all 0.4s ease-out;
    &:hover {
        transform: scale(1.02);

        transition: all 0.4s ease-out;
        opacity: 1;
        background-position: center center;
    }
`;
