import React, { ReactNode } from 'react';
import { CustomLink } from '../Link/CustomLink';
import { FaTwitter, FaFacebook, FaTelegram, FaYoutube, FaLinkedin, FaMedium } from 'react-icons/fa';

interface ISocicalMedia {
    name: string;
    icon: ReactNode;
    path: string;
}

export const SocicalMedia: Array<ISocicalMedia> = [
    {
        name: 'twitter',
        icon: <FaTwitter />,
        path: 'https://twitter.com/touristoken',
    },
    {
        name: 'facebook',
        icon: <FaFacebook />,
        path: 'https://www.facebook.com/TOURISTOKEN',
    },
    {
        name: 'Telegram',
        icon: <FaTelegram />,
        path: 'https://t.me/TOURISTOKEN',
    },
    {
        name: 'Youtube',
        icon: <FaYoutube />,
        path: 'https://www.youtube.com/c/TOURISTOKEN',
    },
    {
        name: 'linkedin',
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/company/touristoken',
    },
    {
        name: 'medium',
        icon: <FaMedium />,
        path: 'https://touristoken.medium.com/',
    },
];
export const SocialMedias = () => {
    return (
        <div className="flex space-x-6">
            {SocicalMedia.map((x) => (
                <CustomLink key={x.path} href={x.path} className="text-white hover:text-yellow-300">
                    <span className="sr-only">{x.name}</span>
                    {x.icon}
                </CustomLink>
            ))}
        </div>
    );
};
