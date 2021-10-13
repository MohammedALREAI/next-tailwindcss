import React from 'react';
import styled from 'styled-components';
import { CustomLink } from '../Link/CustomLink';
import { IFooterLinks } from './footerLinks';

export const List = styled('li')`
    color: #ffffff;
    font-family: Lato, sans-serif;
    font-size: 12px;
    font-weight: 900;
    height: 15px;
    line-height: 12px;
    margin: 10px 0px;
    padding: 10px 0px;
    cursor: pointer;

    a {
        text-decoration: none;

        transition: all 0.3s ease;

        cursor: pointer;
    }
    a:hover {
        background: #8f8d8d;
    }
`;

export const ListItem = ({ title, path }: IFooterLinks) => {
    return (
        <List>
            <CustomLink className="" href={path}>
                {title}
            </CustomLink>
        </List>
    );
};
