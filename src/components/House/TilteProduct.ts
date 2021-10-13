import styled from 'styled-components';

// ${(props) => props.theme.colors.yellow};
export const TitleProduct = styled('p')`
    color: #01b7f2;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-size: 15.9996px;
    font-weight: 400;
    height: 19px;
    line-height: 15.9996px;
`;

export const Price = styled('p')`
    color: #838383;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-size: 9.9996px;
    font-weight: 400;
    height: 15px;
    line-height: 13.3325px;
    margin: 20px 0px;
`;

export const Button = styled('button')`
    max-width: 120px;
    max-height: 70px;
    background-color: #98ce44;
    color: #ffffff;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-size: 9.9996px;
    font-weight: 400;
    height: 18px;
    line-height: 18.3323px;
    margin: 6px 0px 0px;
    padding: 0px 15px;
`;

export const WrapperHiddenDiv = styled('div')`
    background: ${(props) => props.theme.colors.yellow};
    width: 100%;
    height: 100%;
    opacity: 0.75;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:hover {
        transition: all 700ms ease-out;
        transform: rotateY(180deg);
    }
`;
