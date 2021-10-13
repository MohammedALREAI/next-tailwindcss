import Link, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';
interface CustomLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}
export const CustomLink: FC<CustomLinkProps> = ({ className, children, href, as, ...other }) => {
    return (
        <Link as={as || 'a'} {...other} href={href}>
            <a className={className || ''}>
                <>{children}</>
            </a>
        </Link>
    );
};
