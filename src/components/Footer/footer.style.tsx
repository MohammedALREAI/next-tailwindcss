import styled from 'styled-components';

export const FooterStyle = styled('footer')`
    background-color: #0b121f;
    box-shadow: 0px -7px 4px -5px #506793;
    transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s';
    margin-top: 20px;
    margin-bottom: 0px;
    padding: 20px 0px 0px 0px;
`;
export const EndFooterStyle = styled('footer')`
    background-color: #0b121f;
    box-shadow: 0px -7px 4px -5px #506793;
    transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s';

    margin-bottom: 0px;
    padding: 20px 0px 0px 0px;
`;
export const Product = styled('h3')`
    color: #dbdaac;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 200;
    line-height: 24px;
    margin: 0px;
    @media (max-width: 640px) {
        color: #dbdaac;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 200;
        line-height: 30px;
    }
`;

export const FollowUs = styled(Product)`
    margin-bottom: 22px;
`;

export const CopyRight = styled('p')`
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    line-height: 22.4px;
    span {
        color: #ffff00;
        margin: 0px 2px;
    }
    @media (max-width: 640px) {
        color: #dbdaac;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 200;
        height: 30px;
        line-height: 30px;
    }
`;
export const ContactUs = styled('p')`
    color: #dbdaac;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 200;
    height: 24px;
    line-height: 24px;
    margin: 20px 0px;
    margin-bottom: 40px;
    margin-top: 20px;

    @media (max-width: 640px) {
        color: #dbdaac;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 200;
        height: 30px;
        line-height: 30px;
    }
`;
