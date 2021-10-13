import React from 'react';
import { useScreenLg, useScreenMd, useScreenSm } from 'src/utils/breakpoints';
import { CustomLink } from '../Link/CustomLink';
import { ContactUs, CopyRight, FollowUs, FooterStyle, Product, EndFooterStyle } from './footer.style';
import { footerLinks } from './footerLinks';
import { List, ListItem } from './ListItem';
import { SocialMedias } from './SocilaMedila';
import Image from 'next/image';
import { useExternalImageLoader } from 'src/utils/externaImageLoader';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Footer = () => {
    // const externaImageLoader=useExternalImageLoader()
    const sm = useScreenSm();
    console.log('sm', sm);
    return (
        <>
            <div className="border-1" style={{}}>
                <FooterStyle>
                    <h2 id="footerHeading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <div className="xl:grid grid grid-col-1 xl:grid-cols-3 xl:gap-12">
                            <div className="space-y-8 xl:col-span-1  items-center ">
                                {sm ? (
                                    <>
                                        <div className="flex justify-center  items-center w-auto h-auto text-[#ffffff]">
                                            <img
                                                className="mx-auto  max-w-[280px]"
                                                src="https://touristoken.com/wp-content/uploads/2020/03/logo200.png"
                                                alt="TOURISTOKEN"
                                            />
                                        </div>
                                        <CopyRight>
                                            © 2018-2021 <span>TOURISTOKEN </span>All rights reserved{' '}
                                        </CopyRight>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <Product className="uppercase">Solutions</Product>
                                        <ul className="mt-4 space-y-4">
                                            {footerLinks.left.length &&
                                                footerLinks.left.map((x, index) => {
                                                    return (
                                                        <ListItem
                                                            key={`${x.path}-${index}`}
                                                            title={x.title}
                                                            path={x.path}
                                                        />
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <Product className="uppercase">Quick Links</Product>
                                        <ul className="mt-4 space-y-4">
                                            {footerLinks.right.length &&
                                                footerLinks.right.map((x, index) => {
                                                    return (
                                                        <ListItem
                                                            key={`${x.path} ${index}`}
                                                            title={x.title}
                                                            path={x.path}
                                                        />
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <FollowUs>Follow Us</FollowUs>
                                        <SocialMedias />
                                        <ContactUs>Contact us</ContactUs>
                                        <ul className="mt-4 space-y-4">
                                            <List>
                                                <CustomLink href="mailto:info@touristoken.com">
                                                    info@touristoken.com
                                                </CustomLink>
                                            </List>
                                            <List>
                                                <CustomLink href="mailto:sales@touristoken.com">
                                                    sales@touristoken.com
                                                </CustomLink>
                                            </List>
                                            <List>
                                                <CustomLink href="/new-place-registrations">Add your place</CustomLink>
                                            </List>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FooterStyle>
                <EndFooterStyle className="flex justify-between items-center w-full">
                    <div>COINGECKO</div>
                    <div>BLOCKFOLIO</div>
                    <div>SLP</div>
                    <div>STATEOFTHEDAPPS</div>
                    <div>DAPP.COM</div>
                    <div>CRYPTWERK</div>
                    <div>BITCOINGARDEN</div>
                </EndFooterStyle>
            </div>
        </>
    );
};
