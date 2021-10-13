import React, { FC, MouseEventHandler } from 'react';

interface Props {
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
}

export const ButtonRecorder: FC<Props> = ({ title, onClick, children, className }) => {
    return (
        <button className={`customButton ${className}`} onClick={onClick}>
            {title} {children}
        </button>
    );
};
