import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';

export const Heeader = styled('header')``;
export const TItileHeader = styled('h3')`
    color: #eded00;
    font-family: Oranienbaum;
    font-size: 30px;
    font-weight: 600;
    height: 35px;
    line-height: 48px;
`;

export const IoHome = styled(IoMdHome)`
    font-family: simple-line-icons;
    font-size: 16.8px;
    font-weight: 400;
    height: 16px;
    margin: 0px;
    padding: 0px;
    width: 17px;
    fill: white;
`;

export const TSpanHeader = styled('h3')`
    color: #eeee22;
    font-family: 'Original Surfer';
    font-size: 14px;
    font-weight: 200;
    height: 18px;
    line-height: 52px;
    @media (max-width: 640px) {
        color: #eded00;
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 500;
        height: 45px;
        line-height: 21.6px;
    }
`;
