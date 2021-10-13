import React, { useContext, useState } from 'react';
import { footerLinks } from '../Footer/footerLinks';
import { ListItem } from '../Footer/ListItem';
import { CustomLink } from '../Link/CustomLink';
import { TSpanHeader } from '../NavBar/Header.styles';
import { ListItemMenu } from './ListItemMenu';

interface Props {
    // isOpen:boolean,
    title: string;
    display: boolean;
    handleChange: (display: boolean) => void;
}

export const Dropdown = ({ title, display, handleChange }: Props) => {
    return (
        <div className=" flex px-0 py-4 " style={{ borderBottom: '1px solid rgba(0,0,0,.3)' }}>
            <div className="w-full" onClick={() => handleChange(display)}>
                <div className="relative  w-full ">
                    <input
                        className="bg-black my-2 w-full flex flex-col absolute z-10 cursor-pointer opacity-0 h-5  "
                        type="checkbox"
                        id="chck1"
                    />
                    <div className="flex justify-between items-center my-4 cursor-pointer select-none tab-label">
                        <TSpanHeader>{title}</TSpanHeader>
                        <div
                            className={`rounded-full flex items-center ${
                                display ? 'rotate-180' : ''
                            } w-7 h-7 justify-end`}
                        >
                            <svg
                                aria-hidden="true"
                                className=""
                                data-reactid="266"
                                fill="none"
                                height="24"
                                stroke="#606F7B"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div className={`${display ? '' : 'hidden'} `}>
                        {footerLinks.right.map((x, i) => {
                            return <ListItemMenu title={x.title} path={x.path} />;
                        })}
                        <div className=" pr-8 text-grey-darkest text-left">dmdmd</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
