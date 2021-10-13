/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react';
import { HomeIcon, MenuIcon } from '@heroicons/react/outline';
import { IoHome, TItileHeader, TSpanHeader } from './Header.styles';
import { CustomLink } from '../Link/CustomLink';
import { Dropdown } from '../MenuItem/Menu';
import { IoMdHome } from 'react-icons/io';

export default function Header() {
    const [OpenMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <div>
            <header className="relative main h-20">
                <nav aria-label="Top" className="sm:px-6 lg:px-8 py-2">
                    <div className="sm:px-0 sm:pb-0">
                        <div className="flex items-center justify-between">
                            <TItileHeader className="">TOURISTOKEN</TItileHeader>
                            <nav className="flex items-center justify-between space-x-4  ">
                                <CustomLink href="/" className="leading-0 flex justify-center items-center">
                                    <IoHome className="w-4 h-4 leading-0" />
                                </CustomLink>
                                <CustomLink href="/blog" className="leading-0">
                                    <TSpanHeader>Account</TSpanHeader>
                                </CustomLink>

                                <Dropdown
                                    title={'More'}
                                    display={OpenMenu}
                                    handleChange={() => setOpenMenu(!OpenMenu)}
                                />
                                <CustomLink href="/blog">
                                    <TSpanHeader>Blog</TSpanHeader>
                                </CustomLink>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
